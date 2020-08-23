function showHide($selector) {
    if($selector.style.display === 'none') {
        $selector.style.display = 'block'
    }
    else {
        $selector.style.display = 'none'
    }
}