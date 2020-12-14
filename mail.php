<?php
// Проверяем тип запроса, обрабатываем только POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $faqPhone = $_POST['faqPhone'];
    $content2 = $faqPhone . ' оставил заявку на обратный звонок.';
    $success2 = mail("callme@whitelotus.com", 'Обратный звонок', $content2);
    if ($success2) {
        // Отдаем 200 код ответа на http запрос
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        // Отдаем ошибку с кодом 500 (internal server error).
        http_response_code(500);
        echo "Письмо не отправлено";
    }

    // Получаем параметры, посланные с javascript
    $name = $_POST['name'];
    $procedure = $_POST['procedure'];
    $phone = $_POST['phone'];
    $time = $_POST['time'];

    // создаем переменную с содержанием письма
    $content = $name . ' оставил заявку на ' . $procedure . ' в ' . $time . '. Его телефон: ' . $phone;

    // Первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание
    $success = mail("admin@whitelotus.com", 'Запись на ритуал', $content);

    if ($success) {
        // Отдаем 200 код ответа на http запрос
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        // Отдаем ошибку с кодом 500 (internal server error).
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}

