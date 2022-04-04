function receiveName() {
    var name = document.querySelector("input[name='nome']")
    var phone = document.querySelector("input[name='telefone']")
    var msg = document.querySelector("textarea[name='msg']")

    console.log(name.value)
    console.log(phone.value)
    console.log(msg.value)
}