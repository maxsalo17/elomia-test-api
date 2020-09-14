# elomia-test-api @Max Salo
На выполнение тестового задания понадобилось 4 часа. При реализации long-polling были сложности с прослушкой изменений в коллекции messages в Message.watch(pipeline) для конкретного пользователя (как оказалось в pipline нужно было указывать id пользователя не в виде string, а в виде ObjectId, и как ключ указывать не user, а fullDocument.user).
