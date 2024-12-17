
function heavyPuzzle(numbers) {
      const canConnect = (a, b) => a.slice(-2) === b.slice(0, 2);

      const result = [numbers[0]];
      const used = new Set([numbers[0]]);

      for (let i = 1; i < numbers.length; i++) {
        for (const num of numbers) {
          if (!used.has(num) && canConnect(result[result.length - 1], num)) {
            result.push(num);
            used.add(num);
            break;
          }
        }
      }

      return result.join("");
}


function handleFileProcessing() {
      const fileInput = document.getElementById("fileInput");
      const file = fileInput.files[0];

      
      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result;
        const numbers = content.split("\n").map(line => line.trim()).filter(line => line);
        const result = heavyPuzzle(numbers);
        document.getElementById("result").textContent = result || "Не вдалося скласти ланцюжок.";
      };

      reader.readAsText(file);
}

document.getElementById("processButton").addEventListener("click", handleFileProcessing);



