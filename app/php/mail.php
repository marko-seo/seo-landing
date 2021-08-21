<?php

$recepient = "blagojevic.m.seoi@gmail.com";
$sitename = "Test forms";

$name = trim($_POST["field-name"]);
$phone = trim($_POST["field-tel"]);
$email = trim($_POST["field-email"]);
$consent = trim($_POST["field-consent"]);

$message = "Name: $name \nPhone: $phone \nEmail: $email \nConsent: $consent";

$pagetitle = "New application\"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
