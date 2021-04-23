export function visibility() {
  document.querySelector('.buttonVisibility').addEventListener('click', () => {
    const changeType = document.getElementById('userPassword');
    if (changeType.type === 'password') {
      changeType.type = 'text';
      document.getElementById('visibility').style.display = 'block';
      document.getElementById('noVisibility').style.display = 'none';
    } else {
      changeType.type = 'password';
      document.getElementById('visibility').style.display = 'none';
      document.getElementById('noVisibility').style.display = 'block';
    }
  });
}
