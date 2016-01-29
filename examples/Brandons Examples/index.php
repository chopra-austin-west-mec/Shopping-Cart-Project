<?php
require_once('connect.php');
$error = false;
$success = false;

if(@$_POST['addUser']){
    /**
     * New user was submitted. Make sure name and email are present!
     */
    if(!$_POST['email']){
        $error .= '<p>Email is a required field!</p>';
    }

    if(!$_POST['name']){
        $error .= '<p>Name is a required field!</p>';
    }

    /**
     * If we're here...all is well. Process the insert
     */
    $stmt = $dbh->prepare('INSERT INTO users (name, email) VALUES (:name, :email)');
    $result = $stmt->execute(
        array(
            'name'=>$_POST['name'],
            'email'=>$_POST['email']
        )
    );

    if($result){
        $success = "User " . $_POST['email'] . " was successfully saved.";
    }else{
        $success = "There was an error saving " . $_POST['email'];
    }
}

/**
 * We'll always want to pull the users to show them in the table
 */
$stmt = $dbh->prepare('SELECT * FROM users');
$stmt->execute();
$users = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add User</title>
</head>

<body>
    <div class="error">
        <?php
        if($error){
            echo $error;
            echo '<br /><br />';
        }
        ?>
    </div>

    <div class="success">
        <?php
        if($success){
            echo $success;
            echo '<br /><br />';
        }
        ?>
    </div>

    <h1>Add User</h1>

    <form name="addUser" method="post">
        <input name="name" placeholder="Your Name" />
        <input name="email" placeholder="Your Email" />
        <button type="submit" name="addUser" value="1">Add New User</button>
    </form>

    <h1>Existing Users</h1>

    <?php
    if($users && count($users)){
    ?>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach($users as $user){
                ?>
                <tr>
                    <td><?php echo $user['id']?></td>
                    <td><?php echo $user['name']?></td>
                    <td><?php echo $user['email']?></td>
                </tr>
                <?php
            }
            ?>
        </tbody>
    </table>
    <?php
    }else{
        echo "There are no users in this system.";
    }
    ?>

</body>

</html>
