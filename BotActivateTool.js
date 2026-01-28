document.addEventListener('DOMContentLoaded', () => {
    //buttonの状態を変数に追加
    const loginButton = document.getElementById('loginButton');
    const loginForm = document.getElementById('loginForm');
    const cancelButton = document.querySelector('.close');

    //使用する関数の宣言
    function startLogin(){
        loginForm.classList.remove('hidden');
        loginButton.classList.add('hidden');
    }
    function cancelLogin() {
        loginForm.classList.add('hidden');
        loginButton.classList.remove('hidden');
    }
    //ボタン入力に対応した動作を記述
    loginButton.addEventListener('click', startLogin);
    cancelButton.addEventListener('click', cancelLogin);

});
