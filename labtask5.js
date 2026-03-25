function analyzeText() {
    let text = document.getElementById("inputText").value;

    
    let trimmedText = text.trim();

    
    if (trimmedText === "") {
        document.getElementById("charCount").innerText = 0;
        document.getElementById("wordCount").innerText = 0;
        document.getElementById("reversedText").innerText = "No text provided!";
        return;
    }

    
    let charCount = text.length;

    
    let words = trimmedText.split(/\s+/);
    let wordCount = words.length;

    
    let reversed = text.split("").reverse().join("");

    
    document.getElementById("charCount").innerText = charCount;
    document.getElementById("wordCount").innerText = wordCount;
    document.getElementById("reversedText").innerText = reversed;
}