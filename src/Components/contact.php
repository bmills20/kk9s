<?php
    // Allow http request from any origin(ating) page
    // Change to kk9s after implementation on local
    // https://stackoverflow.com/questions/1653308/access-control-allow-origin-multiple-origin-domains
    if(isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Get JSON with message details
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    $errors = array();

    // Access-Control headers are received during OPTIONS requests
    // OPTIONS requests (used for debugging purposes): 
    // The OPTIONS method is used to describe the communication options for the target resource.
    // Once fully integrated, change to POST: 
    // The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.

    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        // Validate that fields are filled (and valid) before
        // continuing to send email
        if(empty($_POST['email'])) {
            $errors[] = 'Email field is empty';
        }
        else {
            $email = $_POST['email'];
            // Validating email with PHP filter
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $errors[] = 'Invalid email';
            }
        }
        if(empty($_POST['message'])) {
            $errors[] = 'Message is empty';
        }
        else {
            $message = $_POST['message'];
        }

        // If no errors, format email
        if (empty($errors)) {
            $date = date('j, F Y h:i A');

            $emailBody = "
            <html>
            <head>
                <title> New message from $email </title>
            </head>
            <body style=\"background-color: $fafafa;\">
                <div style=\"padding:20px;\">
                    Date: <span style=\"color:#888\">$date</span>
                    <br>
                    Email: <span style=\"color:#888\">$email</span>
                    <br>
                    Message: <div style=\"color:#888\">$message</div>
                </div>
                </body>
                </html>
            
            ";

            // PHP refresher: double quotes check for variable, single quotes do not
            $headers = 'From: Contact Form' . "\r\n" .
            "Reply-To $email" . "\r\n" .
            // MIME version will always be 1.0
            // MIME alows emails to contain characters other than ASCII characters
            // In our case our email contains HTML styling
            "MIME-Version: 1.0\r\n" .
            "Content-Type: text/html; charset=iso-8859-1\r\n";

            $to = 'me@meme.com';
            $subject = 'Wassup, train my dog plz';

            if(mail($to, $subject, $emailBody, $headers)) {
                $sent = true;
            }


        }


        exit(0);
    }

    echo "You have CORS!";
?>

<?php if (!empty($errors)) : ?>

{
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?>


  <?php if (isset($sent) && $sent === true) : ?>

{
  "status": "success",
  "message": "Your data was successfully submitted"
}
  <?php endif; ?>