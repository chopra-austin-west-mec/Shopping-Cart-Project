
$(document).ready(function() {
  var category_tree = [];
  $.getJSON('api/category_tree.json', function(data){
    category_tree = data;
  

    // Replace with your own values
    var APPLICATION_ID = ada_env.algolia['app_id'];
    var SEARCH_ONLY_API_KEY = ada_env.algolia['app_key'];
    var INDEX_NAME = ada_env.env + '_products';
    var PARAMS = {
      hitsPerPage: 20,
      maxValuesPerFacet: 2000,
      disjunctiveFacets: ['category_0', 'category_1', 'category_2', 'availability']
    };

    var categories_facets = ['category_0', 'category_1', 'category_2'];
    var FACETS_ORDER_OF_DISPLAY = ['availability'];
    var FACETS_LABELS = {availability : 'AVAILABILITY'};

    // force some facet sort orders
    var force_facet_sort = {
      'availability' : ['In Stock', 'Out Of Stock', 'Discontinued']
    }
    // Client + Helper initialization
    var algolia = algoliasearch(APPLICATION_ID, SEARCH_ONLY_API_KEY);
    var algoliaHelper = algoliasearchHelper(algolia, INDEX_NAME, PARAMS);

    var trackedParameters = [];

    // DOM BINDING
    $searchInput = $('#search');
    $main = $('main');
    $sortBySelect = $('#sort-by-select');
    $header = $('#is-header');
    $hits = $('#is-hits');
    $pagination = $('#is-pagination'); 
    $categories = $('#categories');   
    $facets = $('#facets');

    // Hogan templates binding
    var headerTemplate = Hogan.compile($('#is-header-template').text());
    var paginationTemplate = Hogan.compile($('#pagination-template').text());
    var hitTemplate = Hogan.compile($('#hit-template').text());
    var categoriesTemplate = Hogan.compile($('#categories-template').text());
    var facetsTemplate = Hogan.compile($('#facets-template').text());    
    var noResultsTemplate = Hogan.compile($('#no-results-template').text());

    // keep a copy of the non-checked category tree for reverting
    clean_cats = jQuery.extend(true, {}, category_tree);




    initFromURLParams();
    clearFilters();      


    // Input binding
    $(document).on('click', '.category-refine', function(e) {

      // do custom level categories
        if($(this).data('type') === 'category'){
          // unchecked unrefined
          if( $(this).data('checked') === false && $(this).data('refined') === false){
            algoliaHelper.addDisjunctiveRefine(categories_facets[$(this).data('level')], $(this).data('value'));
            if($(this).data('level') === 0){
              for ( i in category_tree ){
                if( $(this).data('value') == category_tree[i].path ){
                  category_tree[i].isChecked_0 = true;
                  for (j in category_tree[i].subs){
                    algoliaHelper.addDisjunctiveRefine(categories_facets[$(this).data('level') + 1], category_tree[i].subs[j].path);
                  }
                }
              }
            }            
            else if($(this).data('level') === 1 ){
              for ( i in category_tree ){
                if( $(this).data('value').indexOf(category_tree[i].path) === 0 ){
                  for (j in category_tree[i].subs){
                    if( $(this).data('value') == category_tree[i].subs[j].path ){
                      category_tree[i].subs[j].isChecked_1 = true;
                      for (k in category_tree[i].subs[j].subs){
                        algoliaHelper.addDisjunctiveRefine(categories_facets[$(this).data('level') + 1], category_tree[i].subs[j].subs[k].path);
                      }
                    }
                  }
                }
              }
            }
            else if($(this).data('level') === 2){
              for ( i in category_tree ){
                if( $(this).data('value').indexOf(category_tree[i].path) === 0 ){
                  for (j in category_tree[i].subs){
                    if( $(this).data('value').indexOf(category_tree[i].subs[j].path) === 0 ){
                      for (k in category_tree[i].subs[j].subs){
                        if($(this).data('value') == category_tree[i].subs[j].subs[k].path ){
                          category_tree[i].subs[j].subs[k].isChecked_2 = true;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          else if( $(this).data('checked') === false && $(this).data('refined') === true){
            if( $(this).data('level') === 1 ){
              lvl_refs = algoliaHelper.getState().getDisjunctiveRefinements(categories_facets[$(this).data('level')]);
              for ( i in category_tree ){
                if( $(this).data('value').indexOf(category_tree[i].path) === 0 ){
                  for (j in category_tree[i].subs){
                    if( $(this).data('value') == category_tree[i].subs[j].path ){
                      category_tree[i].subs[j].isChecked_1 = true;
                      for (k in category_tree[i].subs[j].subs){
                        algoliaHelper.addDisjunctiveRefine(categories_facets[2], category_tree[i].subs[j].subs[k].path);
                      }
                    }
                    else if (category_tree[i].subs[j].isChecked_1 != true && lvl_refs.indexOf(category_tree[i].subs[j].path) >= 0){
                      algoliaHelper.removeDisjunctiveRefine(categories_facets[$(this).data('level')], category_tree[i].subs[j].path);
                    }
                  }
                }
              }
            }
            else if( $(this).data('level') === 2 ){
              lvl_refs = algoliaHelper.getState().getDisjunctiveRefinements(categories_facets[$(this).data('level')]);
              for ( i in category_tree ){
                if( $(this).data('value').indexOf(category_tree[i].path) === 0 ){
                  for (j in category_tree[i].subs){
                    if( $(this).data('value').indexOf(category_tree[i].subs[j].path) === 0 ){
                      for(k in category_tree[i].subs[j].subs){
                        if( $(this).data('value') == category_tree[i].subs[j].subs[k].path ){
                          category_tree[i].subs[j].subs[k].isChecked_2 = true;
                        }
                        else if (category_tree[i].subs[j].subs[k].isChecked_2 != true && lvl_refs.indexOf(category_tree[i].subs[j].subs[k].path) >= 0){
                          algoliaHelper.removeDisjunctiveRefine(categories_facets[$(this).data('level')], category_tree[i].subs[j].subs[k].path);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          else if( $(this).data('checked') === true){
            lvl = $(this).data('level');
            for ( i in category_tree ){
              if(category_tree[i].path.indexOf($(this).data('value')) === 0 || $(this).data('value').indexOf(category_tree[i].path) === 0){
                if(lvl <= 0){
                  category_tree[i].isChecked_0 = false;
                  algoliaHelper.removeDisjunctiveRefine(categories_facets[0], category_tree[i].path);  
                }
                for(j in category_tree[i].subs){
                  if(category_tree[i].subs[j].path.indexOf($(this).data('value')) === 0 || $(this).data('value').indexOf(category_tree[i].subs[j].path) === 0){
                    if(lvl <= 1){
                      category_tree[i].subs[j].isChecked_1 = false;
                      algoliaHelper.removeDisjunctiveRefine(categories_facets[1], category_tree[i].subs[j].path);  
                    }
                    for(k in category_tree[i].subs[j].subs){
                      if(category_tree[i].subs[j].subs[k].path.indexOf($(this).data('value')) === 0 || $(this).data('value').indexOf(category_tree[i].subs[j].subs[k].path) === 0){
                        if(lvl <= 2){
                          category_tree[i].subs[j].subs[k].isChecked_2 = false;
                          algoliaHelper.removeDisjunctiveRefine(categories_facets[2], category_tree[i].subs[j].subs[k].path);  
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          algoliaHelper.search();
        }
        else{
          algoliaHelper.toggleRefinement($(this).data('facet'), $(this).data('value'));
          algoliaHelper.search();
        }


    });

    $(document).on('click', '.toggle-refine', function(e) {
      e.preventDefault();
      algoliaHelper.toggleRefine($(this).data('facet'), $(this).data('value')).search();
    });


    $(document).on('click', '.go-to-page', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, '500', 'swing');
      algoliaHelper.setCurrentPage(+$(this).data('page') - 1).search();
    });

    $searchInput
    .on('keyup', function() {
        clearFilters();      
        if($(this).val() == ''){
            removeIS();
            clearURLParams();
        }
        else{
            var query = $(this).val();
            algoliaHelper.setQuery(query).search();
            showIS();
        }

        
    });

    // Search results
    algoliaHelper.on('result', function(content, state) {

        renderHeader(content)
        renderHits(content);
        renderPagination(content);


        renderCategories(generateCategories(content, state));
        renderFacets(content);

        setURLParams();
    });

    function clearFilters(){
      algoliaHelper.clearRefinements();
      if(algoliaHelper.lastResults != null){
        availability = algoliaHelper.lastResults.getFacetValues('availability');
        if(typeof availability !== 'undefined'){
          for(ix in availability){
            if (availability[ix].name == 'In Stock')
              algoliaHelper.addDisjunctiveFacetRefinement('availability', 'In Stock');   
            if (availability[ix].name == 'Out Of Stock')       
              algoliaHelper.addDisjunctiveFacetRefinement('availability', 'Out Of Stock');                    
          }
        }
    }




      category_tree = jQuery.extend(true, {}, clean_cats);
    }

    function generateCategories(content, state){

      var _ct = jQuery.extend(true, {}, category_tree);
        var categories = {
          cats : $.map(_ct, function(value, index) {
                              return [value];
                            })
        };

        // manage hidden/visible facets
        show = {};
        for( d in content.disjunctiveFacets ){
          if(categories_facets.indexOf(content.disjunctiveFacets[d].name) >= 0){
            show[content.disjunctiveFacets[d].name] = content.disjunctiveFacets[d].data;
          }
        }
        for( i in categories.cats){
          categories.cats[i].show_0 = ((typeof show[categories_facets[0]] !== 'undefined' && Object.keys(show[categories_facets[0]]).indexOf(categories.cats[i].path) >= 0 && show[categories_facets[0]][categories.cats[i].path] > 0) || categories.cats[i].isChecked_0);
          for(j in categories.cats[i].subs){
            categories.cats[i].subs[j].show_1 = ( (typeof show[categories_facets[1]] !== 'undefined' && Object.keys(show[categories_facets[1]]).indexOf(categories.cats[i].subs[j].path) >= 0 && show[categories_facets[1]][categories.cats[i].subs[j].path] > 0) || categories.cats[i].subs[j].isChecked_1);
            for (k in categories.cats[i].subs[j].subs){
              categories.cats[i].subs[j].subs[k].show_2 = ( ( typeof show[categories_facets[2]] !== 'undefined' && Object.keys(show[categories_facets[2]]).indexOf(categories.cats[i].subs[j].subs[k].path) >= 0 && show[categories_facets[2]][categories.cats[i].subs[j].subs[k].path] > 0) || categories.cats[i].subs[j].subs[k].isChecked_2);
            }
          }
        }

        for(level in categories_facets){
          // get visible facets list

          refs = state.getDisjunctiveRefinements(categories_facets[level]);

          for ( i in refs ){
            split_ref = refs[i].split(' > ');

            if (level === '0'){
              for( x in categories.cats){
                if(categories.cats[x].name === split_ref[0]){
                  categories.cats[x].isRefined_0 = true;
                }
              }
            }
            else if (level === '1'){
              for( x in categories.cats){
                if(categories.cats[x].name === split_ref[0] && categories.cats[x].isChecked_0){
                  for(y in categories.cats[x].subs){
                    if(categories.cats[x].subs[y].name === split_ref[1]){
                      categories.cats[x].subs[y].isRefined_1 = true;
                    }
                  }
                }
              }
            }
            else if ( level === '2') {
              for( x in categories.cats){
                if(categories.cats[x].name === split_ref[0] && categories.cats[x].isChecked_0){
                  for(y in categories.cats[x].subs){
                    if(categories.cats[x].subs[y].name === split_ref[1] && categories.cats[x].subs[y].isChecked_1){
                      for(z in categories.cats[x].subs[y].subs){
                        if(categories.cats[x].subs[y].subs[z].name === split_ref[2]){
                          categories.cats[x].subs[y].subs[z].isRefined_2 = true;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        return categories;



    }


    function renderHeader(content){
        header_info = { query: content.query };
        $header.html(headerTemplate.render(header_info));
    }

    function renderHits(content) {
        // decode html entities in 

        $hits.html(hitTemplate.render(content));
    }

    function renderPagination(content) {
          var pages = [];
          if (content.page > 3) {
            pages.push({current: false, number: 1});
            pages.push({current: false, number: '...', disabled: true});
          }
          for (var p = content.page - 3; p < content.page + 3; ++p) {
            if (p < 0 || p >= content.nbPages) continue;
            pages.push({current: content.page === p, number: p + 1});
          }
          if (content.page + 3 < content.nbPages) {
            pages.push({current: false, number: '...', disabled: true});
            pages.push({current: false, number: content.nbPages});
          }
          var pagination = {
            pages: pages,
            prev_page: content.page > 0 ? content.page : false,
            next_page: content.page + 1 < content.nbPages ? content.page + 2 : false
          };
          $pagination.html(paginationTemplate.render(pagination));
    }


    function renderCategories(category_tree){  
        $categories.html(categoriesTemplate.render(category_tree));
    }

    function renderFacets(content){
        var facetsHtml = '';
        for (var facetIndex = 0; facetIndex < FACETS_ORDER_OF_DISPLAY.length; ++facetIndex) {
          var facetName = FACETS_ORDER_OF_DISPLAY[facetIndex];
          var facetResult = content.getFacetByName(facetName);
          if (!facetResult) continue;
          var facetContent = {};
          facet_values = content.getFacetValues(facetName);
          if( typeof force_facet_sort[facetName] !== 'undefined'){
            new_facet_values = [];
            for(index in facet_values){
              if(force_facet_sort[facetName].indexOf(facet_values[index].name) !== -1){
                new_facet_values[force_facet_sort[facetName].indexOf(facet_values[index].name)] = facet_values[index];
              }
            }
            facet_values = filt(new_facet_values);
          }

          facetContent = {
                  facet: facetName,
                  title: FACETS_LABELS[facetName],
                  values: facet_values,
                  disjunctive: $.inArray(facetName, PARAMS.disjunctiveFacets) !== -1
                };

          facetsHtml += facetsTemplate.render(facetContent);
        }
        $facets.html(facetsHtml);
    }

    function showIS(){
        $(".main-container").hide();
        $(".landing-container").hide();    
        $("#category-hero").hide();       
        $(".instant-search-container").show();
    }

    function removeIS() {
        $(".instant-search-container").hide();
        $(".main-container").show();
        $(".landing-container").show();
        $("#category-hero").show();               
    }

    // params list gets craycray if you try to add in the disjunctive catalog refinements. so search term only instead. 
    function setURLParams() {
      
      if (algoliaHelper.state.query.trim() !== '')  trackedParameters.push('query');
      if (algoliaHelper.state.page !== 0)           trackedParameters.push('page');

      var URLParams = window.location.search.slice(1);

      var nonAlgoliaURLParams = algoliasearchHelper.AlgoliaSearchHelper.getForeignConfigurationInQueryString(URLParams);
      var nonAlgoliaURLHash = window.location.hash;

      var helperParams = algoliaHelper.getStateAsQueryString({filters: trackedParameters, moreAttributes: nonAlgoliaURLParams});

      if (URLParams === helperParams) return;

      var now = Date.now();
      window.history.replaceState(null, '', window.location.pathname + '?' + nonAlgoliaURLHash + helperParams  );
    }

    function clearURLParams(){
      var URLParams = window.location.search.slice(1);
      var nonAlgoliaURLParams = algoliasearchHelper.AlgoliaSearchHelper.getForeignConfigurationInQueryString(URLParams);
      var nonAlgoliaURLHash = window.location.hash;
      var helperParams = algoliaHelper.getStateAsQueryString({filters: [], moreAttributes: nonAlgoliaURLParams});
      window.history.replaceState(null, '', window.location.pathname + (helperParams == '' ? '' : '?' + helperParams ));
    }


    function initFromURLParams() {
      var URLString = window.location.search.slice(1);
      var URLParams = algoliasearchHelper.AlgoliaSearchHelper.getConfigurationFromQueryString(URLString);
      if (URLParams.query) $searchInput.val(URLParams.query);
      algoliaHelper.overrideStateWithoutTriggeringChangeEvent(algoliaHelper.state.setQueryParameters(URLParams));
      if(URLParams.query){
        algoliaHelper.search();
        showIS();
      }
    }

    // condense a sparse array
    function filt(a) { 
     var b = []; 
     for(var i = 0;i < a.length;i++) { 
      if (a[i] !== undefined && a[i] != null) { 
       b.push(a[i]); 
      }
     } 
     return b; 
    }
    });

});

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}