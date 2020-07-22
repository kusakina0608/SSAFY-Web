const element_id = document.querySelector("#input-id");
const element_pwd = document.querySelector("#input-pwd");
const element_reg_btn = document.querySelector("#btn-register");
console.log(element_id);
element_id.addEventListener("keypress", function(e) {
    console.log(e.keycode);
    console.log(e.key);
    if (e.key === 'Enter') { // enter key pressed
        console.log(e.target.value);
        if (e.target.value !== "") {
            if (element_pwd.value === "") {
                document.getElementById("input-pwd").focus();
            } else {
                valid_check();
            }
        } else {
            alert("아이디를 입력해 주세요.");
        }
    }
})

element_pwd.addEventListener("keypress", function(e) {
    console.log(e.keycode);
    if (e.key === 'Enter') { // enter key pressed
        console.log(e.target.value);
        if (e.target.value !== "") {
            if (element_id.value === "") {
                document.getElementById("input-id").focus();
            } else {
                valid_check();
            }
        } else {
            alert("비밀번호를 입력해 주세요.");
        }
    }
})

element_reg_btn.addEventListener("click", valid_check)

function valid_check() {
    const id_val = element_id.value;
    const pwd_val = element_pwd.value;
    if (id_val === "" && pwd_val === "") {
        alert("아이디와 비밀번호를 입력하세요.");
    } else if (id_val === "") {
        alert("아이디를 입력해 주세요.");
    } else if (pwd_val === "") {
        alert("비밀번호를 입력해 주세요.");
    } else { // id, password 유효성 검사
        alert("회원가입이 완료되었습니다.");
    }
}