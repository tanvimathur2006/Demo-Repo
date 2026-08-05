import random

choices = ["stone", "paper", "scissors"]

# Computer chooses randomly
computer = random.choice(choices)

# User input
user = input("Enter stone, paper, or scissors: ").lower()

# Check for valid input
if user not in choices:
    print("Invalid choice! Please enter stone, paper, or scissors.")
else:
    print("You chose:", user)
    print("Computer chose:", computer)

    if user == computer:
        print("It's a Tie!")
    elif (user == "stone" and computer == "scissors") or \
         (user == "paper" and computer == "stone") or \
         (user == "scissors" and computer == "paper"):
        print("Congratulations! You Win!")
    else:
        print("Computer Wins!")