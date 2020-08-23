contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}

for(key in contact){
    // Code goes here
    if (key == "fullname") {
        contact[key] = "John Doe";
    } else if (key == "phone") {
        contact[key] = "123-123-2134";
    } else if (key == "email") {
        contact[key] = "test@nowhere.com";
    }
    console.log(key + " : " + contact[key]);
}