<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case ("POST"): // Send the email
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = $params->email ?? '';
        $name = $params->name ?? '';
        $message = $params->message ?? '';

        $recipient = 'mail@niko-helwig.de';  
        $subject = "Contact From <$email>";
        $body = "From: $name<br>$message";

        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=utf-8',
            'From: noreply@niko-helwig.de'
        ];

        mail($recipient, $subject, $body, implode("\r\n", $headers));

        // ✅ Antwort senden
        header('Content-Type: application/json');
        echo json_encode(['success' => true]);
        exit;

    default: // Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
