function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('pt-br'); //hora local, do computador
    document.getElementById('datetime').textContent = "Data e Hora: " + dateTimeString;
}
updateDateTime(); // Atualiza a data e hora quando a página carrega
setInterval(updateDateTime, 1000); // Atualiza a cada segundo