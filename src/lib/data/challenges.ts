export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  category: string;
  estimatedTime: number; // in minutes
  starterCode: string;
  testCases: TestCase[];
  hints: string[];
  solution: string;
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  description: string;
}

export const challenges: Challenge[] = [
  {
    id: "hello-world",
    title: "Hello, Go!",
    description: "Write a program that prints 'Hello, Go!' to the console.",
    difficulty: "easy",
    category: "basics",
    estimatedTime: 5,
    starterCode: `package main

import "fmt"

func main() {
    // Your code here
}`,
    testCases: [
      { input: "", expectedOutput: "Hello, Go!", description: "Should print Hello, Go!" },
    ],
    hints: ["Use fmt.Println() to print text"],
    solution: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}`,
  },
  {
    id: "sum-two-numbers",
    title: "Sum Two Numbers",
    description: "Create a function that takes two integers and returns their sum.",
    difficulty: "easy",
    category: "functions",
    estimatedTime: 10,
    starterCode: `package main

func sum(a, b int) int {
    // Your code here
    return 0
}`,
    testCases: [
      { input: "sum(2, 3)", expectedOutput: "5", description: "sum(2, 3) should return 5" },
      { input: "sum(-1, 1)", expectedOutput: "0", description: "sum(-1, 1) should return 0" },
      { input: "sum(0, 0)", expectedOutput: "0", description: "sum(0, 0) should return 0" },
    ],
    hints: ["Simply add the two numbers together", "Remember Go functions use explicit return"],
    solution: `package main

func sum(a, b int) int {
    return a + b
}`,
  },
  {
    id: "fizzbuzz",
    title: "FizzBuzz",
    description: "Write a function that returns 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, 'FizzBuzz' for multiples of both, or the number as a string.",
    difficulty: "easy",
    category: "control-flow",
    estimatedTime: 15,
    starterCode: `package main

import "strconv"

func fizzBuzz(n int) string {
    // Your code here
    return ""
}`,
    testCases: [
      { input: "fizzBuzz(3)", expectedOutput: "Fizz", description: "3 should return Fizz" },
      { input: "fizzBuzz(5)", expectedOutput: "Buzz", description: "5 should return Buzz" },
      { input: "fizzBuzz(15)", expectedOutput: "FizzBuzz", description: "15 should return FizzBuzz" },
      { input: "fizzBuzz(7)", expectedOutput: "7", description: "7 should return 7" },
    ],
    hints: ["Use the modulo operator %", "Check for FizzBuzz first", "Use strconv.Itoa to convert int to string"],
    solution: `package main

import "strconv"

func fizzBuzz(n int) string {
    if n%3 == 0 && n%5 == 0 {
        return "FizzBuzz"
    }
    if n%3 == 0 {
        return "Fizz"
    }
    if n%5 == 0 {
        return "Buzz"
    }
    return strconv.Itoa(n)
}`,
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    description: "Write a function that reverses a string.",
    difficulty: "medium",
    category: "strings",
    estimatedTime: 20,
    starterCode: `package main

func reverse(s string) string {
    // Your code here
    return ""
}`,
    testCases: [
      { input: "reverse(\"hello\")", expectedOutput: "olleh", description: "hello should become olleh" },
      { input: "reverse(\"Go\")", expectedOutput: "oG", description: "Go should become oG" },
      { input: "reverse(\"\")", expectedOutput: "", description: "Empty string should return empty" },
    ],
    hints: ["Convert string to rune slice for proper unicode handling", "Use two pointers technique"],
    solution: `package main

func reverse(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}`,
  },
  {
    id: "palindrome",
    title: "Palindrome Check",
    description: "Write a function that checks if a string is a palindrome (reads same forwards and backwards).",
    difficulty: "medium",
    category: "strings",
    estimatedTime: 20,
    starterCode: `package main

func isPalindrome(s string) bool {
    // Your code here
    return false
}`,
    testCases: [
      { input: "isPalindrome(\"racecar\")", expectedOutput: "true", description: "racecar is a palindrome" },
      { input: "isPalindrome(\"hello\")", expectedOutput: "false", description: "hello is not a palindrome" },
      { input: "isPalindrome(\"a\")", expectedOutput: "true", description: "Single char is palindrome" },
    ],
    hints: ["Compare characters from both ends", "Use runes for unicode support"],
    solution: `package main

func isPalindrome(s string) bool {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        if runes[i] != runes[j] {
            return false
        }
    }
    return true
}`,
  },
  {
    id: "concurrent-sum",
    title: "Concurrent Sum",
    description: "Use goroutines and channels to sum an array of numbers concurrently, splitting work into two parts.",
    difficulty: "hard",
    category: "concurrency",
    estimatedTime: 30,
    starterCode: `package main

func concurrentSum(nums []int) int {
    // Your code here
    // Use goroutines and channels
    return 0
}`,
    testCases: [
      { input: "concurrentSum([]int{1,2,3,4})", expectedOutput: "10", description: "Sum of 1+2+3+4 = 10" },
      { input: "concurrentSum([]int{10,20,30,40})", expectedOutput: "100", description: "Sum of 10+20+30+40 = 100" },
    ],
    hints: ["Split the array in half", "Use a channel to receive partial sums", "Don't forget to read from both goroutines"],
    solution: `package main

func concurrentSum(nums []int) int {
    ch := make(chan int)
    mid := len(nums) / 2
    
    sumSlice := func(slice []int) {
        sum := 0
        for _, n := range slice {
            sum += n
        }
        ch <- sum
    }
    
    go sumSlice(nums[:mid])
    go sumSlice(nums[mid:])
    
    return <-ch + <-ch
}`,
  },
];

export const getChallengesByDifficulty = (difficulty: string) =>
  challenges.filter((c) => c.difficulty === difficulty);

export const getChallengeById = (id: string) =>
  challenges.find((c) => c.id === id);

