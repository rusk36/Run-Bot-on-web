document.addEventListener('DOMContentLoaded', () => {
    //buttonの状態を変数に追加
    const authButton = document.getElementById('authButton');
    const cancelButton = document.querySelector('.close')

    //使用する関数の宣言
    function startAuth() {
        authModal.style.display = 'block';
        authButton.style.visibility = 'hidden';
    }
    
    function cancelAuth(){
        authModal.style.display = 'none';
        authButton.style.visibility = 'visible';
    }
    
    
    //ボタン入力に対応した動作を記述
    authButton.addEventListener('click', startAuth);
    cancelButton.addEventListener('click', cancelAuth);

});
