import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState(() => {
    if (typeof window !== 'undefined') {
      return parseInt(localStorage.getItem('rpsScore')) || 0;
    }
    return 0;
  });
  const { theme } = useTheme();

  const choices = [
    { name: 'rock', emoji: '🪨', beats: 'scissors' },
    { name: 'paper', emoji: '📄', beats: 'rock' },
    { name: 'scissors', emoji: '✂️', beats: 'paper' }
  ];

  useEffect(() => {
    localStorage.setItem('rpsScore', score.toString());
  }, [score]);

  const handleChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);

    if (choice.name === computerChoice.name) {
      setResult('Draw!');
    } else if (choice.beats === computerChoice.name) {
      setResult('You Win!');
      setScore(score + 1);
    } else {
      setResult('Computer Wins!');
      setScore(score - 1);
    }
  };

  return (
    <div className={`flex flex-col items-center p-4 min-h-screen ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      <h1 className="text-3xl font-bold mb-8">Rock Paper Scissors</h1>
      
      <div className="text-2xl mb-8">Score: {score}</div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {choices.map((choice) => (
          <button
            key={choice.name}
            onClick={() => handleChoice(choice)}
            className={`p-6 text-4xl rounded-full transition-transform hover:scale-110
              ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}
              shadow-lg active:scale-95`}
          >
            {choice.emoji}
          </button>
        ))}
      </div>

      {playerChoice && computerChoice && (
        <div className="space-y-4 text-center">
          <div className="flex justify-center gap-8 text-4xl">
            <div className="text-center">
              <div>You</div>
              <div className="mt-2">{playerChoice.emoji}</div>
            </div>
            <div className="text-center">
              <div>Computer</div>
              <div className="mt-2">{computerChoice.emoji}</div>
            </div>
          </div>
          <div className={`text-2xl font-bold ${
            result === 'You Win!' ? 'text-green-500' :
            result === 'Computer Wins!' ? 'text-red-500' :
            'text-yellow-500'
          }`}>
            {result}
          </div>
        </div>
      )}

      <button
        onClick={() => setScore(0)}
        className={`mt-8 px-4 py-2 rounded-lg ${
          theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
        } text-white transition-colors`}
      >
        Reset Score
      </button>
    </div>
  );
}