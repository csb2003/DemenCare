document.addEventListener('DOMContentLoaded', function () {
    const sequenceLength = 5; // You can adjust the sequence length as needed

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function displaySequence(sequence, delay) {
        for (let item of sequence) {
            document.getElementById('output').innerText += item + ' ';
            await sleep(delay * 1000);
            document.getElementById('output').innerText = document.getElementById('output').innerText.slice(0, -1);
            await sleep(100);
        }
    }

    async function getUserInput() {
        return new Promise(resolve => {
            document.getElementById('userInput').style.display = 'block';
            document.getElementById('userInput').focus();
            document.getElementById('userInput').addEventListener('keyup', function (event) {
                if (event.key === 'Enter') {
                    resolve(document.getElementById('userInput').value.trim());
                    document.getElementById('userInput').style.display = 'none';
                }
            });
        });
    }

    let gameCount = 0;
    let correctAnswers = 0;
    const memoryPerformanceData = [];

    // Function to update the memory performance graph
    function updateMemoryPerformanceGraph() {
        const ctx = document.getElementById('memoryPerformanceGraph').getContext('2d');

        const data = {
            labels: memoryPerformanceData.map((_, index) => `Game ${index + 1}`),
            datasets: [{
                label: 'Correct Answers',
                data: memoryPerformanceData,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        };
        console.log("check1")
        const config = {
            type: 'line',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: sequenceLength  // Adjust the maximum value as needed
                    }
                }
            }
        };
        console.log("check2")
        new Chart(ctx, config);
    }

    document.getElementById('startButton').addEventListener('click', async function () {
        const delay = 1;  // Adjust the delay (in seconds) to display each item

        // Generate a random sequence of numbers
        const sequence = Array.from({ length: sequenceLength }, () => String(Math.floor(Math.random() * 9) + 1));
        correctAnswers = 0;
        document.getElementById('startButton').style.display = 'none';
        document.getElementById('output').innerText = 'Memorize the sequence: ';

        // Display the sequence
        await sleep(1000);  // Wait for 1 second before displaying the sequence
        await displaySequence(sequence, delay);

        // Get the user's input
        const userInput = await getUserInput();

        // Check if the user's input matches the sequence
        if (userInput === sequence.join('')) {
            document.getElementById('output').innerText = "Congratulations! You remembered the sequence.";
            correctAnswers++;
        } else {
            document.getElementById('output').innerText = "Oops! You got it wrong. The correct sequence was: " + sequence.join('');
        }
        // Update game statistics
        gameCount++;
        memoryPerformanceData.push(correctAnswers);

        // Update the memory performance graph
        updateMemoryPerformanceGraph();

        document.getElementById('startButton').style.display = 'block';
    });
});