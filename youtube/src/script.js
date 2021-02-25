let displayDropMenuStatus = 0;
function dropMenu (idElement, displayType = null) {
    switch (displayDropMenuStatus) {
        case 1:
            displayDropMenuStatus = 0;
            document.getElementById(idElement).style.display = 'none';
            break; 
        case 0:
            displayDropMenuStatus = 1;
            if (displayType == 'grid') {
                document.getElementById(idElement).style.display = 'grid';
            } else {
                document.getElementById(idElement).style.display = 'block';
            }
            break;
    }
}