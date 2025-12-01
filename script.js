const btnSi = document.getElementById('si');
const btnNo = document.getElementById('no');

btnSi.addEventListener('click', () => {
    window.location.href = 'acepto.html';
});
function teleportButton(btn) {
    const rect = btn.getBoundingClientRect();
    const margin = 10;
    const btnW = rect.width;
    const btnH = rect.height;
    const maxLeft = Math.max(margin, window.innerWidth - btnW - margin);
    const maxTop = Math.max(margin, window.innerHeight - btnH - margin);
    const left = Math.floor(Math.random() * (maxLeft - margin + 1)) + margin;
    const top = Math.floor(Math.random() * (maxTop - margin + 1)) + margin;
    btn.style.position = 'fixed';
    btn.style.transition = 'left 0.25s ease, top 0.25s ease, transform 0.2s ease';
    btn.style.left = left + 'px';
    btn.style.top = top + 'px';
}

btnNo.addEventListener('click', (e) => {

    teleportButton(btnNo);

   
    let noScale = btnNo._scale || 1;
    noScale = Math.max(0.3, noScale - 0.05);
    let currScale = btnSi._scale || 1;
    currScale = currScale + 1;
    btnSi._scale = currScale;
    btnSi.style.transform = `scale(${currScale})`;
    btnNo._scale = noScale;
    btnNo.style.transform = `scale(${noScale})`;
});