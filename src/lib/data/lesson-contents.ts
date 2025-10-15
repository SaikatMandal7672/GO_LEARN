export interface LessonContent {
  content: string;
  code: string;
  keyPoints: string[];
  commonMistakes: string[];
  bestPractices: string[];
}

export const lessonContents: Record<string, LessonContent> = {
  // ============================================
  // BEGINNER MODULE
  // ============================================
  
  setup: {
    content: `
# Getting Started with Go

Go (or Golang) is an open-source programming language developed by Google. It's known for its simplicity, efficiency, and excellent support for concurrent programming.

## Why Go?

- **Simple syntax** - Easy to learn and read
- **Fast compilation** - Quick development cycles
- **Built-in concurrency** - Goroutines and channels
- **Strong standard library** - Everything you need out of the box
- **Static typing** - Catch errors at compile time

## Installing Go

1. Visit [go.dev/dl](https://go.dev/dl) to download Go
2. Run the installer for your operating system
3. Verify installation by running \`go version\` in your terminal

## Your First Go Program

Every Go program starts with a \`package\` declaration and the \`main\` function is the entry point.
    `,
    code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}`,
    keyPoints: [
      "Go is a statically-typed, compiled language",
      "Every Go file starts with a package declaration",
      "The main package is special - it defines an executable program",
      "The main() function is the entry point of your program",
      "fmt is Go's standard formatting package",
    ],
    commonMistakes: [
      "Forgetting to import the fmt package",
      "Using println instead of fmt.Println",
      "Missing the main function in the main package",
      "Case sensitivity - Go is case-sensitive",
    ],
    bestPractices: [
      "Use gofmt to format your code consistently",
      "Keep your main function small - delegate to other functions",
      "Use meaningful package names",
      "Follow Go naming conventions (camelCase for private, PascalCase for public)",
    ],
  },

  variables: {
    content: `
# Variables & Data Types

Go is a statically typed language, which means variable types are known at compile time.

## Declaring Variables

There are several ways to declare variables in Go:

### Using var keyword
\`\`\`go
var name string = "Alice"
var age int = 25
\`\`\`

### Short declaration (inside functions)
\`\`\`go
name := "Alice"
age := 25
\`\`\`

## Basic Data Types

| Type | Description | Example |
|------|-------------|---------|
| string | Text | "Hello" |
| int | Integer | 42 |
| float64 | Decimal | 3.14 |
| bool | Boolean | true/false |
    `,
    code: `package main

import "fmt"

func main() {
    // Different ways to declare variables
    var name string = "Gopher"
    var age int = 3
    isAwesome := true
    
    // Multiple declarations
    var (
        city    = "San Francisco"
        country = "USA"
    )
    
    // Constants
    const Pi = 3.14159
    
    fmt.Printf("Name: %s\\n", name)
    fmt.Printf("Age: %d\\n", age)
    fmt.Printf("Is Awesome: %t\\n", isAwesome)
    fmt.Printf("Location: %s, %s\\n", city, country)
    fmt.Printf("Pi: %f\\n", Pi)
}`,
    keyPoints: [
      "Use var for package-level variables",
      "Use := for short declarations inside functions",
      "Go has type inference - the compiler can determine types",
      "Constants are declared with const keyword",
      "Zero values: 0 for numbers, empty string for strings, false for booleans",
    ],
    commonMistakes: [
      "Using := outside of functions",
      "Declaring variables without using them (compile error)",
      "Confusing = (assignment) with := (declaration)",
      "Forgetting that strings are immutable in Go",
    ],
    bestPractices: [
      "Use short declaration := when type is obvious",
      "Group related variable declarations",
      "Use constants for values that don't change",
      "Choose descriptive variable names",
    ],
  },

  "control-flow": {
    content: `
# Control Flow

Control flow statements allow you to control the execution path of your program based on conditions.

## If/Else Statements

Go's if statements don't require parentheses around the condition:

\`\`\`go
if x > 10 {
    fmt.Println("x is greater than 10")
} else if x > 5 {
    fmt.Println("x is greater than 5")
} else {
    fmt.Println("x is 5 or less")
}
\`\`\`

## Switch Statements

Switch statements in Go are more powerful than in many languages - they don't fall through by default:

\`\`\`go
switch day {
case "Monday":
    fmt.Println("Start of the week")
case "Friday":
    fmt.Println("TGIF!")
default:
    fmt.Println("Regular day")
}
\`\`\`
    `,
    code: `package main

import "fmt"

func main() {
    // If statement with initialization
    if num := 10; num > 5 {
        fmt.Println("Number is greater than 5")
    }

    // Switch statement
    grade := "A"
    switch grade {
    case "A":
        fmt.Println("Excellent!")
    case "B":
        fmt.Println("Good job!")
    case "C":
        fmt.Println("Fair")
    default:
        fmt.Println("Need improvement")
    }

    // Switch without expression (like if-else chain)
    score := 85
    switch {
    case score >= 90:
        fmt.Println("Grade: A")
    case score >= 80:
        fmt.Println("Grade: B")
    case score >= 70:
        fmt.Println("Grade: C")
    default:
        fmt.Println("Grade: F")
    }
}`,
    keyPoints: [
      "If statements don't need parentheses around conditions",
      "You can declare variables in if statement initialization",
      "Switch statements don't fall through by default",
      "Use 'fallthrough' keyword if you need fall-through behavior",
      "Switch without expression acts like if-else chain",
    ],
    commonMistakes: [
      "Adding unnecessary parentheses around conditions",
      "Forgetting that switch doesn't fall through",
      "Not using the short variable declaration in if",
      "Using = instead of == for comparison",
    ],
    bestPractices: [
      "Use switch for multiple conditions on same variable",
      "Keep conditions simple and readable",
      "Use early returns to reduce nesting",
      "Consider using switch without expression for complex conditions",
    ],
  },

  loops: {
    content: `
# Loops in Go

Go has only one looping construct: the **for** loop. But it's versatile enough to cover all use cases!

## Traditional For Loop

\`\`\`go
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
\`\`\`

## While-style Loop

\`\`\`go
for condition {
    // runs while condition is true
}
\`\`\`

## Infinite Loop

\`\`\`go
for {
    // runs forever (use break to exit)
}
\`\`\`

## Range Loop

The range keyword iterates over slices, arrays, maps, strings, and channels:

\`\`\`go
for index, value := range collection {
    fmt.Println(index, value)
}
\`\`\`
    `,
    code: `package main

import "fmt"

func main() {
    // Traditional for loop
    fmt.Println("Traditional for loop:")
    for i := 1; i <= 3; i++ {
        fmt.Printf("  Count: %d\\n", i)
    }

    // Range over slice
    fruits := []string{"apple", "banana", "cherry"}
    fmt.Println("\\nRange over slice:")
    for index, fruit := range fruits {
        fmt.Printf("  %d: %s\\n", index, fruit)
    }

    // Range ignoring index
    fmt.Println("\\nIgnoring index:")
    for _, fruit := range fruits {
        fmt.Printf("  %s\\n", fruit)
    }

    // While-style loop
    fmt.Println("\\nWhile-style loop:")
    count := 0
    for count < 3 {
        fmt.Printf("  Count: %d\\n", count)
        count++
    }
}`,
    keyPoints: [
      "Go has only the 'for' loop - no while or do-while",
      "Use range to iterate over collections",
      "Use _ to ignore values you don't need",
      "break exits the loop, continue skips to next iteration",
      "Range returns (index, value) for slices and arrays",
    ],
    commonMistakes: [
      "Modifying a slice while ranging over it",
      "Forgetting that range returns a copy of values",
      "Creating infinite loops without exit conditions",
      "Off-by-one errors in loop conditions",
    ],
    bestPractices: [
      "Use range for iterating over collections",
      "Use _ for unused loop variables",
      "Consider using labeled breaks for nested loops",
      "Keep loop bodies small and focused",
    ],
  },

  functions: {
    content: `
# Functions & Return Values

Functions are the building blocks of Go programs. They help organize code into reusable pieces.

## Basic Function

\`\`\`go
func greet(name string) {
    fmt.Println("Hello,", name)
}
\`\`\`

## Functions with Return Values

\`\`\`go
func add(a, b int) int {
    return a + b
}
\`\`\`

## Multiple Return Values

Go functions can return multiple values - commonly used for returning results and errors:

\`\`\`go
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}
\`\`\`

## Named Return Values

\`\`\`go
func rectangle(width, height int) (area, perimeter int) {
    area = width * height
    perimeter = 2 * (width + height)
    return // naked return
}
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "errors"
)

// Basic function
func greet(name string) string {
    return "Hello, " + name + "!"
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}

// Variadic function
func sum(numbers ...int) int {
    total := 0
    for _, n := range numbers {
        total += n
    }
    return total
}

func main() {
    // Call basic function
    message := greet("Gopher")
    fmt.Println(message)

    // Handle multiple return values
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Printf("10 / 2 = %.2f\\n", result)
    }

    // Variadic function call
    total := sum(1, 2, 3, 4, 5)
    fmt.Println("Sum:", total)
}`,
    keyPoints: [
      "Functions are declared with the func keyword",
      "Parameters with same type can share type declaration",
      "Go supports multiple return values",
      "Named return values act as variables in function body",
      "Variadic functions accept variable number of arguments",
    ],
    commonMistakes: [
      "Ignoring error return values",
      "Overusing naked returns in long functions",
      "Not checking for nil before using returned values",
      "Creating functions that are too long",
    ],
    bestPractices: [
      "Always handle error return values",
      "Keep functions small and focused",
      "Use named returns sparingly and for documentation",
      "Return early to avoid deep nesting",
    ],
  },

  "arrays-slices": {
    content: `
# Arrays & Slices

Arrays and slices are fundamental data structures in Go for storing collections of elements.

## Arrays

Arrays have a fixed size declared at compile time:

\`\`\`go
var arr [5]int                    // Zero-valued array
arr := [3]string{"a", "b", "c"}   // Initialized array
arr := [...]int{1, 2, 3}          // Size inferred
\`\`\`

## Slices

Slices are dynamic, flexible views into arrays. They're more commonly used than arrays:

\`\`\`go
slice := []int{1, 2, 3}           // Create slice
slice := make([]int, 5)           // Make with length
slice := make([]int, 0, 10)       // Length 0, capacity 10
\`\`\`

## Slice Operations

\`\`\`go
slice = append(slice, 4, 5)       // Append elements
subSlice := slice[1:3]            // Slice of slice
copy(dest, src)                   // Copy slices
\`\`\`
    `,
    code: `package main

import "fmt"

func main() {
    // Arrays - fixed size
    var numbers [3]int
    numbers[0] = 10
    numbers[1] = 20
    numbers[2] = 30
    fmt.Println("Array:", numbers)

    // Slices - dynamic size
    fruits := []string{"apple", "banana"}
    fmt.Println("Slice:", fruits)

    // Append to slice
    fruits = append(fruits, "cherry", "date")
    fmt.Println("After append:", fruits)

    // Slice operations
    fmt.Println("First two:", fruits[:2])
    fmt.Println("Last two:", fruits[2:])
    fmt.Println("Middle:", fruits[1:3])

    // Make slice with capacity
    nums := make([]int, 3, 10)
    fmt.Printf("Length: %d, Capacity: %d\\n", len(nums), cap(nums))

    // Copy slices
    src := []int{1, 2, 3}
    dst := make([]int, len(src))
    copy(dst, src)
    fmt.Println("Copied:", dst)
}`,
    keyPoints: [
      "Arrays have fixed size, slices are dynamic",
      "Slices are references to underlying arrays",
      "Use make() to create slices with specific capacity",
      "append() may create a new underlying array if capacity exceeded",
      "len() returns length, cap() returns capacity",
    ],
    commonMistakes: [
      "Confusing arrays and slices (different types)",
      "Not reassigning slice after append",
      "Modifying a slice affects the underlying array",
      "Assuming slice copy creates independent data",
    ],
    bestPractices: [
      "Prefer slices over arrays in most cases",
      "Pre-allocate capacity when size is known",
      "Use copy() when you need independent slice data",
      "Be aware of memory when slicing large arrays",
    ],
  },

  maps: {
    content: `
# Maps

Maps are Go's built-in hash table / dictionary type. They store key-value pairs.

## Creating Maps

\`\`\`go
// Using make
ages := make(map[string]int)

// Map literal
ages := map[string]int{
    "Alice": 25,
    "Bob":   30,
}
\`\`\`

## Map Operations

\`\`\`go
ages["Charlie"] = 35          // Add or update
age := ages["Alice"]          // Get value
delete(ages, "Bob")           // Delete key
age, exists := ages["Alice"]  // Check existence
\`\`\`

## Iterating Over Maps

\`\`\`go
for key, value := range ages {
    fmt.Println(key, value)
}
\`\`\`

**Note:** Map iteration order is not guaranteed!
    `,
    code: `package main

import "fmt"

func main() {
    // Create a map
    scores := map[string]int{
        "Alice": 95,
        "Bob":   87,
        "Carol": 92,
    }
    fmt.Println("Scores:", scores)

    // Add a new entry
    scores["Dave"] = 88

    // Update an entry
    scores["Bob"] = 90

    // Check if key exists
    if score, exists := scores["Eve"]; exists {
        fmt.Println("Eve's score:", score)
    } else {
        fmt.Println("Eve not found")
    }

    // Delete an entry
    delete(scores, "Carol")

    // Iterate over map
    fmt.Println("\\nAll scores:")
    for name, score := range scores {
        fmt.Printf("  %s: %d\\n", name, score)
    }

    // Get length
    fmt.Println("\\nTotal students:", len(scores))
}`,
    keyPoints: [
      "Maps are reference types (passed by reference)",
      "Zero value of a map is nil",
      "Always use make() or literal to initialize",
      "Accessing missing key returns zero value",
      "Use comma-ok idiom to check key existence",
    ],
    commonMistakes: [
      "Writing to a nil map (causes panic)",
      "Relying on map iteration order",
      "Not checking if key exists before using value",
      "Concurrent map access without synchronization",
    ],
    bestPractices: [
      "Always initialize maps before use",
      "Use comma-ok idiom to check existence",
      "Consider sync.Map for concurrent access",
      "Use meaningful key types",
    ],
  },

  structs: {
    content: `
# Structs

Structs are Go's way of creating custom types that group related data together.

## Defining a Struct

\`\`\`go
type Person struct {
    Name string
    Age  int
    City string
}
\`\`\`

## Creating Struct Instances

\`\`\`go
// Named fields
p1 := Person{Name: "Alice", Age: 25, City: "NYC"}

// Positional (not recommended)
p2 := Person{"Bob", 30, "LA"}

// Zero value then assign
var p3 Person
p3.Name = "Charlie"
\`\`\`

## Struct Embedding

Go supports composition through embedding:

\`\`\`go
type Employee struct {
    Person    // Embedded struct
    Role string
}
\`\`\`
    `,
    code: `package main

import "fmt"

// Define a struct
type Book struct {
    Title  string
    Author string
    Pages  int
    Price  float64
}

// Struct with embedded type
type Library struct {
    Name  string
    Books []Book
}

func main() {
    // Create struct instance
    book1 := Book{
        Title:  "The Go Programming Language",
        Author: "Donovan & Kernighan",
        Pages:  380,
        Price:  49.99,
    }
    fmt.Printf("Book: %s by %s\\n", book1.Title, book1.Author)

    // Modify struct field
    book1.Price = 39.99
    fmt.Printf("New price: $%.2f\\n", book1.Price)

    // Struct with slice
    library := Library{
        Name: "City Library",
        Books: []Book{
            book1,
            {Title: "Learning Go", Author: "Jon Bodner", Pages: 375, Price: 45.99},
        },
    }

    fmt.Printf("\\n%s has %d books:\\n", library.Name, len(library.Books))
    for _, book := range library.Books {
        fmt.Printf("  - %s\\n", book.Title)
    }
}`,
    keyPoints: [
      "Structs group related fields together",
      "Fields are accessed with dot notation",
      "Structs are value types (copied when passed)",
      "Use pointers to modify struct in functions",
      "Embedding provides composition over inheritance",
    ],
    commonMistakes: [
      "Forgetting structs are copied by value",
      "Not using pointers when modification needed",
      "Circular struct definitions",
      "Exporting fields that should be private",
    ],
    bestPractices: [
      "Use named fields in struct literals",
      "Group related data in structs",
      "Consider constructor functions for complex structs",
      "Use embedding for composition",
    ],
  },

  methods: {
    content: `
# Methods

Methods are functions with a special receiver argument that associates them with a type.

## Defining Methods

\`\`\`go
type Rectangle struct {
    Width, Height float64
}

// Method with value receiver
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

// Method with pointer receiver
func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}
\`\`\`

## Value vs Pointer Receivers

- **Value receiver**: Works on a copy, can't modify original
- **Pointer receiver**: Works on original, can modify it

## When to Use Pointer Receivers

1. When the method needs to modify the receiver
2. When the struct is large (avoid copying)
3. For consistency if other methods use pointers
    `,
    code: `package main

import (
    "fmt"
    "math"
)

type Circle struct {
    Radius float64
}

// Value receiver - doesn't modify original
func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (c Circle) Circumference() float64 {
    return 2 * math.Pi * c.Radius
}

// Pointer receiver - modifies original
func (c *Circle) Scale(factor float64) {
    c.Radius *= factor
}

func (c Circle) String() string {
    return fmt.Sprintf("Circle(radius=%.2f)", c.Radius)
}

func main() {
    circle := Circle{Radius: 5}

    fmt.Println(circle)
    fmt.Printf("Area: %.2f\\n", circle.Area())
    fmt.Printf("Circumference: %.2f\\n", circle.Circumference())

    // Modify using pointer receiver
    circle.Scale(2)
    fmt.Println("\\nAfter scaling by 2:")
    fmt.Println(circle)
    fmt.Printf("New Area: %.2f\\n", circle.Area())
}`,
    keyPoints: [
      "Methods have a receiver between func and name",
      "Value receivers work on copies",
      "Pointer receivers can modify the original",
      "Go auto-converts between values and pointers for method calls",
      "Methods can be defined on any type you define",
    ],
    commonMistakes: [
      "Using value receiver when modification is needed",
      "Mixing value and pointer receivers inconsistently",
      "Defining methods on types you don't own",
      "Not understanding receiver type implications",
    ],
    bestPractices: [
      "Be consistent with receiver types",
      "Use pointer receivers for large structs",
      "Implement String() for custom string representation",
      "Keep methods focused on single responsibility",
    ],
  },

  interfaces: {
    content: `
# Interfaces

Interfaces define behavior through method signatures. Types implement interfaces implicitly.

## Defining Interfaces

\`\`\`go
type Shape interface {
    Area() float64
    Perimeter() float64
}
\`\`\`

## Implicit Implementation

Any type that has the required methods automatically implements the interface:

\`\`\`go
type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}
// Rectangle now implements Shape!
\`\`\`

## Empty Interface

The empty interface \`interface{}\` (or \`any\`) accepts any type:

\`\`\`go
var anything interface{}
anything = 42
anything = "hello"
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "math"
)

// Define interface
type Shape interface {
    Area() float64
}

// Rectangle implements Shape
type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

// Circle implements Shape
type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

// Function accepting interface
func printArea(s Shape) {
    fmt.Printf("Area: %.2f\\n", s.Area())
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    circle := Circle{Radius: 7}

    // Both work with the same function!
    fmt.Print("Rectangle ")
    printArea(rect)

    fmt.Print("Circle ")
    printArea(circle)

    // Slice of interfaces
    shapes := []Shape{rect, circle}
    fmt.Println("\\nTotal areas:")
    for _, shape := range shapes {
        printArea(shape)
    }
}`,
    keyPoints: [
      "Interfaces are implemented implicitly",
      "Small interfaces are preferred (io.Reader, io.Writer)",
      "Empty interface accepts any type",
      "Type assertions extract concrete type from interface",
      "Use type switch for multiple type checks",
    ],
    commonMistakes: [
      "Creating too large interfaces",
      "Not checking type assertions",
      "Returning concrete types instead of interfaces",
      "Over-abstracting with interfaces",
    ],
    bestPractices: [
      "Accept interfaces, return concrete types",
      "Keep interfaces small and focused",
      "Define interfaces where they're used",
      "Use standard library interfaces when possible",
    ],
  },

  "error-handling": {
    content: `
# Error Handling

Go handles errors explicitly through return values, not exceptions.

## The error Type

\`\`\`go
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}
\`\`\`

## Handling Errors

\`\`\`go
result, err := divide(10, 0)
if err != nil {
    log.Fatal(err)
}
\`\`\`

## Custom Errors

\`\`\`go
type ValidationError struct {
    Field   string
    Message string
}

func (e ValidationError) Error() string {
    return fmt.Sprintf("%s: %s", e.Field, e.Message)
}
\`\`\`

## Error Wrapping (Go 1.13+)

\`\`\`go
err := fmt.Errorf("failed to process: %w", originalErr)
\`\`\`
    `,
    code: `package main

import (
    "errors"
    "fmt"
)

// Custom error type
type DivisionError struct {
    Dividend float64
    Divisor  float64
}

func (e DivisionError) Error() string {
    return fmt.Sprintf("cannot divide %.2f by %.2f", e.Dividend, e.Divisor)
}

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, DivisionError{Dividend: a, Divisor: b}
    }
    return a / b, nil
}

func main() {
    // Success case
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Printf("10 / 2 = %.2f\\n", result)
    }

    // Error case
    result, err = divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)

        // Type assertion to get custom error
        var divErr DivisionError
        if errors.As(err, &divErr) {
            fmt.Printf("Tried to divide %.2f\\n", divErr.Dividend)
        }
    }

    // Error wrapping
    originalErr := errors.New("connection failed")
    wrappedErr := fmt.Errorf("database error: %w", originalErr)
    fmt.Println("\\nWrapped error:", wrappedErr)
    fmt.Println("Unwrapped:", errors.Unwrap(wrappedErr))
}`,
    keyPoints: [
      "Errors are values, not exceptions",
      "Always check error return values",
      "nil means no error occurred",
      "Custom errors implement the error interface",
      "Use errors.Is and errors.As for error checking",
    ],
    commonMistakes: [
      "Ignoring returned errors",
      "Using panic for normal error conditions",
      "Not wrapping errors with context",
      "Comparing errors with == instead of errors.Is",
    ],
    bestPractices: [
      "Handle errors where they occur",
      "Add context when propagating errors",
      "Use custom error types for actionable errors",
      "Wrap errors with %w for chain inspection",
    ],
  },

  packages: {
    content: `
# Packages & Imports

Packages are Go's way of organizing and reusing code. Every Go file belongs to a package.

## Package Declaration

\`\`\`go
package mypackage
\`\`\`

## Importing Packages

\`\`\`go
import "fmt"                    // Single import
import (                        // Multiple imports
    "fmt"
    "strings"
    "myproject/utils"           // Local package
)
\`\`\`

## Visibility Rules

- **Uppercase** first letter = exported (public)
- **Lowercase** first letter = unexported (private)

\`\`\`go
func PublicFunction() {}   // Accessible from other packages
func privateFunction() {}  // Only in this package
\`\`\`

## Package Organization

\`\`\`
myproject/
├── main.go
├── go.mod
└── utils/
    └── helpers.go
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "strings"
    "unicode"
)

// Example of using standard library packages
func main() {
    text := "Hello, Go World!"

    // Using strings package
    fmt.Println("Original:", text)
    fmt.Println("Uppercase:", strings.ToUpper(text))
    fmt.Println("Lowercase:", strings.ToLower(text))
    fmt.Println("Contains 'Go':", strings.Contains(text, "Go"))
    fmt.Println("Replace:", strings.Replace(text, "World", "Gopher", 1))

    // Split and join
    words := strings.Split(text, " ")
    fmt.Println("Words:", words)
    fmt.Println("Joined:", strings.Join(words, "-"))

    // Using unicode package
    for _, char := range text {
        if unicode.IsLetter(char) {
            fmt.Printf("%c is a letter\\n", char)
            break
        }
    }
}`,
    keyPoints: [
      "Package name should match directory name",
      "main package creates an executable",
      "Uppercase names are exported (public)",
      "Lowercase names are unexported (private)",
      "Use go.mod for module management",
    ],
    commonMistakes: [
      "Circular package dependencies",
      "Package names that conflict with stdlib",
      "Importing but not using a package",
      "Putting too much in one package",
    ],
    bestPractices: [
      "Use short, lowercase package names",
      "One package per directory",
      "Group related functionality together",
      "Avoid package name stuttering (http.HTTPClient)",
    ],
  },

  "file-io": {
    content: `
# File I/O

Go provides powerful packages for reading and writing files.

## Reading Files

\`\`\`go
// Read entire file
data, err := os.ReadFile("file.txt")

// Read with buffered reader
file, _ := os.Open("file.txt")
defer file.Close()
scanner := bufio.NewScanner(file)
for scanner.Scan() {
    fmt.Println(scanner.Text())
}
\`\`\`

## Writing Files

\`\`\`go
// Write entire file
os.WriteFile("file.txt", []byte("Hello"), 0644)

// Write with buffered writer
file, _ := os.Create("file.txt")
defer file.Close()
writer := bufio.NewWriter(file)
writer.WriteString("Hello\\n")
writer.Flush()
\`\`\`

## File Permissions

\`\`\`
0644 - Owner read/write, others read
0755 - Owner all, others read/execute
\`\`\`
    `,
    code: `package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    filename := "example.txt"

    // Write to file
    content := "Hello, Go!\\nThis is line 2.\\nThis is line 3."
    err := os.WriteFile(filename, []byte(content), 0644)
    if err != nil {
        fmt.Println("Error writing:", err)
        return
    }
    fmt.Println("File written successfully!")

    // Read entire file
    data, err := os.ReadFile(filename)
    if err != nil {
        fmt.Println("Error reading:", err)
        return
    }
    fmt.Println("\\nFile contents:")
    fmt.Println(string(data))

    // Read line by line
    file, err := os.Open(filename)
    if err != nil {
        fmt.Println("Error opening:", err)
        return
    }
    defer file.Close()

    fmt.Println("Reading line by line:")
    scanner := bufio.NewScanner(file)
    lineNum := 1
    for scanner.Scan() {
        fmt.Printf("  Line %d: %s\\n", lineNum, scanner.Text())
        lineNum++
    }

    // Clean up - delete test file
    os.Remove(filename)
    fmt.Println("\\nTest file cleaned up.")
}`,
    keyPoints: [
      "Always close files with defer",
      "Use os.ReadFile for small files",
      "Use bufio.Scanner for line-by-line reading",
      "Check errors after every file operation",
      "File permissions use octal notation",
    ],
    commonMistakes: [
      "Forgetting to close files",
      "Not checking file operation errors",
      "Reading huge files into memory",
      "Wrong file permissions",
    ],
    bestPractices: [
      "Use defer to close files immediately after opening",
      "Use buffered I/O for large files",
      "Check if file exists before operations",
      "Use filepath package for cross-platform paths",
    ],
  },

  json: {
    content: `
# JSON Encoding/Decoding

Go's encoding/json package makes working with JSON easy.

## Struct Tags

\`\`\`go
type User struct {
    Name  string \`json:"name"\`
    Email string \`json:"email,omitempty"\`
    Age   int    \`json:"-"\`  // Ignored
}
\`\`\`

## Encoding (Marshal)

\`\`\`go
user := User{Name: "Alice", Email: "alice@example.com"}
jsonData, err := json.Marshal(user)
// Pretty print
jsonData, err := json.MarshalIndent(user, "", "  ")
\`\`\`

## Decoding (Unmarshal)

\`\`\`go
var user User
err := json.Unmarshal(jsonData, &user)
\`\`\`

## Working with Dynamic JSON

\`\`\`go
var data map[string]interface{}
json.Unmarshal(jsonBytes, &data)
\`\`\`
    `,
    code: `package main

import (
    "encoding/json"
    "fmt"
)

type Person struct {
    Name    string   \`json:"name"\`
    Age     int      \`json:"age"\`
    Email   string   \`json:"email,omitempty"\`
    Hobbies []string \`json:"hobbies"\`
}

func main() {
    // Create struct
    person := Person{
        Name:    "Alice",
        Age:     28,
        Hobbies: []string{"reading", "coding", "hiking"},
    }

    // Encode to JSON
    jsonData, err := json.MarshalIndent(person, "", "  ")
    if err != nil {
        fmt.Println("Error encoding:", err)
        return
    }
    fmt.Println("JSON output:")
    fmt.Println(string(jsonData))

    // Decode from JSON
    jsonString := \`{"name":"Bob","age":32,"hobbies":["gaming","music"]}\`
    var person2 Person
    err = json.Unmarshal([]byte(jsonString), &person2)
    if err != nil {
        fmt.Println("Error decoding:", err)
        return
    }
    fmt.Printf("\\nDecoded: %+v\\n", person2)

    // Dynamic JSON
    var dynamic map[string]interface{}
    json.Unmarshal([]byte(jsonString), &dynamic)
    fmt.Printf("\\nDynamic access - Name: %v\\n", dynamic["name"])
}`,
    keyPoints: [
      "Use struct tags to control JSON field names",
      "omitempty skips zero-value fields",
      "Use - to ignore fields",
      "Marshal returns []byte",
      "Unmarshal requires a pointer",
    ],
    commonMistakes: [
      "Forgetting struct fields must be exported",
      "Not passing pointer to Unmarshal",
      "Ignoring encoding/decoding errors",
      "Using wrong types in dynamic JSON",
    ],
    bestPractices: [
      "Use MarshalIndent for readable output",
      "Define types for known JSON structures",
      "Validate JSON before unmarshaling",
      "Use json.Decoder for streaming JSON",
    ],
  },

  "cli-project-1": {
    content: `
# CLI Project Part 1: Planning & Setup

Let's build a real command-line application - a Task Manager CLI!

## Project Overview

We'll create a CLI tool that:
- Add, list, complete, and delete tasks
- Save tasks to a JSON file
- Use flags for different commands

## Project Structure

\`\`\`
task-cli/
├── main.go
├── task.go
├── storage.go
└── tasks.json
\`\`\`

## Defining Our Data Model

\`\`\`go
type Task struct {
    ID        int       \`json:"id"\`
    Title     string    \`json:"title"\`
    Completed bool      \`json:"completed"\`
    CreatedAt time.Time \`json:"created_at"\`
}
\`\`\`

## Using the flag Package

Go's flag package handles command-line arguments:

\`\`\`go
add := flag.String("add", "", "Add a new task")
list := flag.Bool("list", false, "List all tasks")
flag.Parse()
\`\`\`
    `,
    code: `package main

import (
    "encoding/json"
    "fmt"
    "time"
)

// Task represents a todo item
type Task struct {
    ID        int       \`json:"id"\`
    Title     string    \`json:"title"\`
    Completed bool      \`json:"completed"\`
    CreatedAt time.Time \`json:"created_at"\`
}

// TaskList manages a collection of tasks
type TaskList struct {
    Tasks  []Task \`json:"tasks"\`
    NextID int    \`json:"next_id"\`
}

// NewTaskList creates a new empty task list
func NewTaskList() *TaskList {
    return &TaskList{
        Tasks:  []Task{},
        NextID: 1,
    }
}

// Add adds a new task to the list
func (tl *TaskList) Add(title string) Task {
    task := Task{
        ID:        tl.NextID,
        Title:     title,
        Completed: false,
        CreatedAt: time.Now(),
    }
    tl.Tasks = append(tl.Tasks, task)
    tl.NextID++
    return task
}

func main() {
    // Create task list and add sample tasks
    taskList := NewTaskList()
    taskList.Add("Learn Go basics")
    taskList.Add("Build a CLI app")
    taskList.Add("Master concurrency")

    // Display tasks
    fmt.Println("Task List:")
    fmt.Println("----------")
    for _, task := range taskList.Tasks {
        status := "[ ]"
        if task.Completed {
            status = "[✓]"
        }
        fmt.Printf("%s %d. %s\\n", status, task.ID, task.Title)
    }

    // Show as JSON
    jsonData, _ := json.MarshalIndent(taskList, "", "  ")
    fmt.Println("\\nJSON representation:")
    fmt.Println(string(jsonData))
}`,
    keyPoints: [
      "Plan your data structures before coding",
      "Use structs with JSON tags for persistence",
      "Create methods for common operations",
      "The flag package handles CLI arguments",
      "Organize code into logical files",
    ],
    commonMistakes: [
      "Not planning the data model upfront",
      "Forgetting to handle edge cases",
      "Not considering data persistence",
      "Making the main function too large",
    ],
    bestPractices: [
      "Start with a clear project structure",
      "Define types before implementing logic",
      "Use pointer receivers for methods that modify state",
      "Keep main.go focused on CLI parsing",
    ],
  },

  "cli-project-2": {
    content: `
# CLI Project Part 2: Implementation & Testing

Now let's complete our Task Manager CLI with full functionality!

## Adding Commands

Our CLI will support:
- \`-add "task"\` - Add a new task
- \`-list\` - Show all tasks
- \`-complete ID\` - Mark task as done
- \`-delete ID\` - Remove a task

## File Persistence

We'll save tasks to a JSON file:

\`\`\`go
func SaveToFile(tasks *TaskList, filename string) error {
    data, err := json.MarshalIndent(tasks, "", "  ")
    if err != nil {
        return err
    }
    return os.WriteFile(filename, data, 0644)
}
\`\`\`

## Error Handling

Always provide helpful error messages:

\`\`\`go
if taskID <= 0 {
    return fmt.Errorf("invalid task ID: %d", taskID)
}
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "time"
)

type Task struct {
    ID        int
    Title     string
    Completed bool
    CreatedAt time.Time
}

type TaskManager struct {
    tasks  []Task
    nextID int
}

func NewTaskManager() *TaskManager {
    return &TaskManager{tasks: []Task{}, nextID: 1}
}

func (tm *TaskManager) Add(title string) Task {
    task := Task{
        ID: tm.nextID, Title: title,
        Completed: false, CreatedAt: time.Now(),
    }
    tm.tasks = append(tm.tasks, task)
    tm.nextID++
    return task
}

func (tm *TaskManager) Complete(id int) error {
    for i := range tm.tasks {
        if tm.tasks[i].ID == id {
            tm.tasks[i].Completed = true
            return nil
        }
    }
    return fmt.Errorf("task %d not found", id)
}

func (tm *TaskManager) Delete(id int) error {
    for i, task := range tm.tasks {
        if task.ID == id {
            tm.tasks = append(tm.tasks[:i], tm.tasks[i+1:]...)
            return nil
        }
    }
    return fmt.Errorf("task %d not found", id)
}

func (tm *TaskManager) List() {
    if len(tm.tasks) == 0 {
        fmt.Println("No tasks yet!")
        return
    }
    for _, t := range tm.tasks {
        status := "[ ]"
        if t.Completed { status = "[✓]" }
        fmt.Printf("%s %d. %s\\n", status, t.ID, t.Title)
    }
}

func main() {
    tm := NewTaskManager()

    // Simulate CLI usage
    fmt.Println("Adding tasks...")
    tm.Add("Learn Go")
    tm.Add("Build CLI app")
    tm.Add("Write tests")
    tm.List()

    fmt.Println("\\nCompleting task 1...")
    tm.Complete(1)
    tm.List()

    fmt.Println("\\nDeleting task 2...")
    tm.Delete(2)
    tm.List()
}`,
    keyPoints: [
      "Implement one feature at a time",
      "Return errors for invalid operations",
      "Keep the UI logic separate from business logic",
      "Save state after each modification",
      "Provide user feedback for all actions",
    ],
    commonMistakes: [
      "Not saving after modifications",
      "Silent failures instead of error messages",
      "Index out of bounds when deleting",
      "Not handling empty lists",
    ],
    bestPractices: [
      "Test each command thoroughly",
      "Use meaningful error messages",
      "Consider using a CLI library like cobra",
      "Add help text for each command",
    ],
  },

  // ============================================
  // INTERMEDIATE MODULE
  // ============================================

  goroutines: {
    content: `
# Goroutines Basics

Goroutines are lightweight threads managed by the Go runtime. They're the foundation of Go's concurrency model.

## Starting a Goroutine

Simply add the \`go\` keyword before a function call:

\`\`\`go
go myFunction()        // Function call
go func() {            // Anonymous function
    // do something
}()
\`\`\`

## Key Characteristics

- Goroutines are extremely lightweight (~2KB stack)
- The Go runtime multiplexes goroutines onto OS threads
- Main goroutine must wait for others to complete

## Waiting for Goroutines

Use \`sync.WaitGroup\` to wait for goroutines:

\`\`\`go
var wg sync.WaitGroup
wg.Add(1)
go func() {
    defer wg.Done()
    // work here
}()
wg.Wait()
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "sync"
    "time"
)

func printNumbers(name string, wg *sync.WaitGroup) {
    defer wg.Done()
    for i := 1; i <= 3; i++ {
        fmt.Printf("%s: %d\\n", name, i)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    var wg sync.WaitGroup

    fmt.Println("Starting goroutines...")

    // Start multiple goroutines
    wg.Add(3)
    go printNumbers("Goroutine A", &wg)
    go printNumbers("Goroutine B", &wg)
    go printNumbers("Goroutine C", &wg)

    // Wait for all to complete
    wg.Wait()

    fmt.Println("\\nAll goroutines completed!")

    // Anonymous goroutine example
    wg.Add(1)
    go func() {
        defer wg.Done()
        fmt.Println("Anonymous goroutine says hi!")
    }()
    wg.Wait()
}`,
    keyPoints: [
      "Goroutines are started with the go keyword",
      "They're much lighter than OS threads",
      "Main function won't wait for goroutines by default",
      "Use sync.WaitGroup to coordinate goroutines",
      "Always call Done() with defer",
    ],
    commonMistakes: [
      "Main function exiting before goroutines complete",
      "Forgetting to call wg.Done()",
      "Passing WaitGroup by value instead of pointer",
      "Race conditions with shared variables",
    ],
    bestPractices: [
      "Always use WaitGroup or channels for synchronization",
      "Use defer wg.Done() immediately after wg.Add()",
      "Don't start goroutines you can't stop",
      "Consider goroutine leaks in long-running programs",
    ],
  },

  channels: {
    content: `
# Channels & Communication

Channels are Go's way to communicate between goroutines safely.

## Creating Channels

\`\`\`go
ch := make(chan int)        // Unbuffered channel
ch := make(chan string, 10) // Buffered channel (capacity 10)
\`\`\`

## Sending and Receiving

\`\`\`go
ch <- value    // Send value to channel
value := <-ch  // Receive value from channel
\`\`\`

## Channel Behavior

- **Unbuffered**: Sender blocks until receiver is ready
- **Buffered**: Sender blocks only when buffer is full

## Closing Channels

\`\`\`go
close(ch)
value, ok := <-ch  // ok is false if channel is closed
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "time"
)

func producer(ch chan<- int) {
    for i := 1; i <= 5; i++ {
        fmt.Printf("Producing: %d\\n", i)
        ch <- i
        time.Sleep(100 * time.Millisecond)
    }
    close(ch)
}

func consumer(ch <-chan int, done chan<- bool) {
    for value := range ch {
        fmt.Printf("Consuming: %d\\n", value)
    }
    done <- true
}

func main() {
    ch := make(chan int, 2) // Buffered channel
    done := make(chan bool)

    go producer(ch)
    go consumer(ch, done)

    <-done // Wait for consumer to finish
    fmt.Println("\\nAll done!")

    // Select example
    ch1 := make(chan string)
    ch2 := make(chan string)

    go func() {
        time.Sleep(100 * time.Millisecond)
        ch1 <- "one"
    }()
    go func() {
        time.Sleep(50 * time.Millisecond)
        ch2 <- "two"
    }()

    // Select receives from whichever is ready first
    select {
    case msg1 := <-ch1:
        fmt.Println("Received:", msg1)
    case msg2 := <-ch2:
        fmt.Println("Received:", msg2)
    }
}`,
    keyPoints: [
      "Channels provide safe communication between goroutines",
      "Unbuffered channels synchronize sender and receiver",
      "Range loops over channel until closed",
      "Select handles multiple channel operations",
      "Always close channels from the sender side",
    ],
    commonMistakes: [
      "Sending to a closed channel (panic)",
      "Deadlock from unbuffered channel misuse",
      "Forgetting to close channels in range loops",
      "Not handling the closed channel case",
    ],
    bestPractices: [
      "Use directional channels in function signatures",
      "Close channels from producer, not consumer",
      "Use buffered channels when you know the capacity",
      "Use select with default for non-blocking operations",
    ],
  },

  "http-basics": {
    content: `
# HTTP Package Basics

Go's net/http package provides a powerful HTTP server and client.

## Simple HTTP Server

\`\`\`go
http.HandleFunc("/", handler)
http.ListenAndServe(":8080", nil)
\`\`\`

## Handler Function

\`\`\`go
func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, World!")
}
\`\`\`

## HTTP Methods

\`\`\`go
func handler(w http.ResponseWriter, r *http.Request) {
    switch r.Method {
    case "GET":
        // Handle GET
    case "POST":
        // Handle POST
    }
}
\`\`\`

## Reading Request Data

\`\`\`go
r.URL.Query().Get("name")  // Query parameter
r.FormValue("field")        // Form field
io.ReadAll(r.Body)          // Request body
\`\`\`
    `,
    code: `package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

type Response struct {
    Message string \`json:"message"\`
    Path    string \`json:"path"\`
    Method  string \`json:"method"\`
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
    response := Response{
        Message: "Hello from Go!",
        Path:    r.URL.Path,
        Method:  r.Method,
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(response)
}

func main() {
    // Note: This creates a server - run locally to test!
    // The playground can't run servers

    // Instead, let's simulate the response
    fmt.Println("HTTP Server Example")
    fmt.Println("===================")
    fmt.Println("")
    fmt.Println("In a real app, you would run:")
    fmt.Println("  http.HandleFunc(\"/\", helloHandler)")
    fmt.Println("  http.ListenAndServe(\":8080\", nil)")
    fmt.Println("")

    // Simulate JSON response
    response := Response{
        Message: "Hello from Go!",
        Path:    "/api/hello",
        Method:  "GET",
    }

    jsonData, _ := json.MarshalIndent(response, "", "  ")
    fmt.Println("Sample JSON Response:")
    fmt.Println(string(jsonData))
}`,
    keyPoints: [
      "http.HandleFunc registers handlers for paths",
      "Handlers receive ResponseWriter and Request",
      "Set Content-Type header for JSON responses",
      "Use http.ListenAndServe to start the server",
      "Request contains method, URL, headers, body",
    ],
    commonMistakes: [
      "Not setting Content-Type header",
      "Forgetting to handle different HTTP methods",
      "Not closing response body after reading",
      "Blocking the handler with long operations",
    ],
    bestPractices: [
      "Use a router like gorilla/mux or chi for complex routing",
      "Always set appropriate response headers",
      "Log requests for debugging",
      "Use middleware for cross-cutting concerns",
    ],
  },

  "rest-design": {
    content: `
# REST API Design

Learn to design clean, consistent RESTful APIs in Go.

## REST Principles

- **Resources**: Nouns, not verbs (/users, not /getUsers)
- **HTTP Methods**: GET, POST, PUT, DELETE
- **Status Codes**: Use appropriate codes (200, 201, 404, 500)

## URL Structure

\`\`\`
GET    /api/users          - List users
GET    /api/users/:id      - Get user
POST   /api/users          - Create user
PUT    /api/users/:id      - Update user
DELETE /api/users/:id      - Delete user
\`\`\`

## Response Format

\`\`\`json
{
    "data": { ... },
    "meta": { "page": 1, "total": 100 },
    "error": null
}
\`\`\`

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 404 | Not Found |
| 500 | Server Error |
    `,
    code: `package main

import (
    "encoding/json"
    "fmt"
)

// API Response structure
type APIResponse struct {
    Success bool        \`json:"success"\`
    Data    interface{} \`json:"data,omitempty"\`
    Error   *APIError   \`json:"error,omitempty"\`
    Meta    *Meta       \`json:"meta,omitempty"\`
}

type APIError struct {
    Code    string \`json:"code"\`
    Message string \`json:"message"\`
}

type Meta struct {
    Page  int \`json:"page"\`
    Limit int \`json:"limit"\`
    Total int \`json:"total"\`
}

type User struct {
    ID    int    \`json:"id"\`
    Name  string \`json:"name"\`
    Email string \`json:"email"\`
}

func main() {
    // Success response example
    successResp := APIResponse{
        Success: true,
        Data: []User{
            {ID: 1, Name: "Alice", Email: "alice@example.com"},
            {ID: 2, Name: "Bob", Email: "bob@example.com"},
        },
        Meta: &Meta{Page: 1, Limit: 10, Total: 2},
    }

    fmt.Println("Success Response:")
    printJSON(successResp)

    // Error response example
    errorResp := APIResponse{
        Success: false,
        Error: &APIError{
            Code:    "NOT_FOUND",
            Message: "User with ID 999 not found",
        },
    }

    fmt.Println("\\nError Response:")
    printJSON(errorResp)
}

func printJSON(v interface{}) {
    data, _ := json.MarshalIndent(v, "", "  ")
    fmt.Println(string(data))
}`,
    keyPoints: [
      "Use nouns for resources, verbs are HTTP methods",
      "Keep URLs consistent and predictable",
      "Use proper HTTP status codes",
      "Return consistent response structure",
      "Version your API (/api/v1/users)",
    ],
    commonMistakes: [
      "Using verbs in URLs (/api/getUsers)",
      "Inconsistent response formats",
      "Wrong status codes (200 for errors)",
      "Not handling pagination for lists",
    ],
    bestPractices: [
      "Document your API with OpenAPI/Swagger",
      "Use consistent naming conventions",
      "Include pagination for list endpoints",
      "Validate request data thoroughly",
    ],
  },

  "gin-intro": {
    content: `
# Gin Framework Introduction

Gin is a high-performance HTTP web framework written in Go.

## Why Gin?

- Fast: Uses httprouter for routing
- Middleware support
- JSON validation
- Error management
- Route grouping

## Basic Setup

\`\`\`go
import "github.com/gin-gonic/gin"

func main() {
    r := gin.Default()
    r.GET("/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{"message": "pong"})
    })
    r.Run() // :8080
}
\`\`\`

## Route Parameters

\`\`\`go
r.GET("/users/:id", func(c *gin.Context) {
    id := c.Param("id")
    c.JSON(200, gin.H{"id": id})
})
\`\`\`
    `,
    code: `package main

import (
    "fmt"
)

// Simulating Gin-like patterns
// (Gin can't run in playground - needs external package)

type Context struct {
    params map[string]string
    query  map[string]string
}

func (c *Context) Param(key string) string {
    return c.params[key]
}

func (c *Context) Query(key string) string {
    return c.query[key]
}

type Handler func(*Context)

type Route struct {
    method  string
    path    string
    handler Handler
}

func main() {
    fmt.Println("Gin Framework Example")
    fmt.Println("=====================")
    fmt.Println("")
    fmt.Println("// Install: go get -u github.com/gin-gonic/gin")
    fmt.Println("")
    fmt.Println("package main")
    fmt.Println("")
    fmt.Println("import \"github.com/gin-gonic/gin\"")
    fmt.Println("")
    fmt.Println("func main() {")
    fmt.Println("    r := gin.Default()")
    fmt.Println("    ")
    fmt.Println("    r.GET(\"/\", func(c *gin.Context) {")
    fmt.Println("        c.JSON(200, gin.H{\"message\": \"Hello!\"})")
    fmt.Println("    })")
    fmt.Println("    ")
    fmt.Println("    r.GET(\"/users/:id\", func(c *gin.Context) {")
    fmt.Println("        id := c.Param(\"id\")")
    fmt.Println("        c.JSON(200, gin.H{\"user_id\": id})")
    fmt.Println("    })")
    fmt.Println("    ")
    fmt.Println("    r.POST(\"/users\", func(c *gin.Context) {")
    fmt.Println("        var user User")
    fmt.Println("        c.BindJSON(&user)")
    fmt.Println("        c.JSON(201, user)")
    fmt.Println("    })")
    fmt.Println("    ")
    fmt.Println("    r.Run(\":8080\")")
    fmt.Println("}")
}`,
    keyPoints: [
      "gin.Default() includes logger and recovery middleware",
      "Use c.JSON() for JSON responses",
      "c.Param() gets route parameters",
      "c.Query() gets query string parameters",
      "c.BindJSON() parses request body",
    ],
    commonMistakes: [
      "Not checking binding errors",
      "Forgetting to return after c.JSON()",
      "Using gin.New() without middleware",
      "Not handling panics properly",
    ],
    bestPractices: [
      "Use route groups for API versioning",
      "Create custom middleware for auth",
      "Validate input with binding tags",
      "Use gin.ReleaseMode in production",
    ],
  },

  middleware: {
    content: `
# Middleware & Request Handling

Middleware functions process requests before they reach your handlers.

## Middleware Pattern

\`\`\`go
func Logger() gin.HandlerFunc {
    return func(c *gin.Context) {
        start := time.Now()
        c.Next()  // Process request
        duration := time.Since(start)
        log.Printf("%s %s %v", c.Request.Method, c.Request.URL.Path, duration)
    }
}
\`\`\`

## Common Middleware

- **Logging**: Track requests and timing
- **Authentication**: Verify JWT/sessions
- **CORS**: Handle cross-origin requests
- **Rate Limiting**: Prevent abuse
- **Recovery**: Handle panics gracefully

## Using Middleware

\`\`\`go
r := gin.New()
r.Use(Logger())           // Global
r.Use(gin.Recovery())

api := r.Group("/api")
api.Use(AuthMiddleware()) // Group-specific
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "time"
)

// Simulated middleware chain
type Request struct {
    Method string
    Path   string
    UserID string
}

type Response struct {
    Status int
    Body   string
}

type Handler func(*Request) *Response
type Middleware func(Handler) Handler

// Logging middleware
func LoggingMiddleware(next Handler) Handler {
    return func(req *Request) *Response {
        start := time.Now()
        fmt.Printf("[LOG] %s %s started\\n", req.Method, req.Path)

        resp := next(req)

        fmt.Printf("[LOG] %s %s completed in %v (status: %d)\\n",
            req.Method, req.Path, time.Since(start), resp.Status)
        return resp
    }
}

// Auth middleware
func AuthMiddleware(next Handler) Handler {
    return func(req *Request) *Response {
        if req.UserID == "" {
            fmt.Println("[AUTH] Unauthorized request")
            return &Response{Status: 401, Body: "Unauthorized"}
        }
        fmt.Printf("[AUTH] User %s authenticated\\n", req.UserID)
        return next(req)
    }
}

// Actual handler
func HelloHandler(req *Request) *Response {
    return &Response{Status: 200, Body: "Hello, " + req.UserID}
}

func main() {
    // Chain middleware
    handler := LoggingMiddleware(AuthMiddleware(HelloHandler))

    fmt.Println("=== Request without auth ===")
    req1 := &Request{Method: "GET", Path: "/api/hello", UserID: ""}
    resp1 := handler(req1)
    fmt.Printf("Response: %s\\n\\n", resp1.Body)

    fmt.Println("=== Request with auth ===")
    req2 := &Request{Method: "GET", Path: "/api/hello", UserID: "user123"}
    resp2 := handler(req2)
    fmt.Printf("Response: %s\\n", resp2.Body)
}`,
    keyPoints: [
      "Middleware wraps handlers for cross-cutting concerns",
      "c.Next() calls the next handler in chain",
      "c.Abort() stops the middleware chain",
      "Middleware can modify request and response",
      "Order of middleware matters",
    ],
    commonMistakes: [
      "Forgetting to call c.Next()",
      "Not handling errors in middleware",
      "Wrong middleware order (auth before logging)",
      "Blocking operations in middleware",
    ],
    bestPractices: [
      "Keep middleware focused and simple",
      "Use context for passing data between middleware",
      "Log at appropriate levels",
      "Handle panics in recovery middleware",
    ],
  },

  postgresql: {
    content: `
# PostgreSQL Setup & Connection

Learn to connect Go applications to PostgreSQL databases.

## Driver Installation

\`\`\`bash
go get github.com/lib/pq
\`\`\`

## Connection String

\`\`\`go
connStr := "host=localhost port=5432 user=postgres password=secret dbname=mydb sslmode=disable"
db, err := sql.Open("postgres", connStr)
\`\`\`

## Basic Operations

\`\`\`go
// Query single row
var name string
err := db.QueryRow("SELECT name FROM users WHERE id = $1", id).Scan(&name)

// Query multiple rows
rows, err := db.Query("SELECT id, name FROM users")
defer rows.Close()
for rows.Next() {
    var id int
    var name string
    rows.Scan(&id, &name)
}

// Execute (INSERT, UPDATE, DELETE)
result, err := db.Exec("INSERT INTO users(name) VALUES($1)", "Alice")
\`\`\`
    `,
    code: `package main

import (
    "fmt"
)

// Simulating database operations
// (Can't connect to real DB in playground)

type User struct {
    ID    int
    Name  string
    Email string
}

type DB struct {
    users []User
    nextID int
}

func NewDB() *DB {
    return &DB{users: []User{}, nextID: 1}
}

func (db *DB) Create(name, email string) User {
    user := User{ID: db.nextID, Name: name, Email: email}
    db.users = append(db.users, user)
    db.nextID++
    return user
}

func (db *DB) FindByID(id int) (*User, error) {
    for _, u := range db.users {
        if u.ID == id {
            return &u, nil
        }
    }
    return nil, fmt.Errorf("user not found")
}

func (db *DB) FindAll() []User {
    return db.users
}

func main() {
    fmt.Println("PostgreSQL Connection Example")
    fmt.Println("==============================")
    fmt.Println("")
    fmt.Println("Connection code:")
    fmt.Println("  db, err := sql.Open(\"postgres\", connStr)")
    fmt.Println("  if err != nil { log.Fatal(err) }")
    fmt.Println("  defer db.Close()")
    fmt.Println("")

    // Simulate database operations
    db := NewDB()

    // Create users
    db.Create("Alice", "alice@example.com")
    db.Create("Bob", "bob@example.com")

    // Query all
    fmt.Println("All users:")
    for _, u := range db.FindAll() {
        fmt.Printf("  ID: %d, Name: %s, Email: %s\\n", u.ID, u.Name, u.Email)
    }

    // Query by ID
    user, _ := db.FindByID(1)
    fmt.Printf("\\nFound user: %+v\\n", *user)
}`,
    keyPoints: [
      "Use database/sql with appropriate driver",
      "Always close database connections",
      "Use parameterized queries to prevent SQL injection",
      "Check errors after every database operation",
      "Use connection pooling in production",
    ],
    commonMistakes: [
      "Not closing rows after query",
      "String concatenation in SQL (SQL injection)",
      "Not handling null values",
      "Opening too many connections",
    ],
    bestPractices: [
      "Use connection pooling",
      "Set appropriate timeouts",
      "Use transactions for multiple operations",
      "Consider using an ORM for complex apps",
    ],
  },

  gorm: {
    content: `
# GORM ORM Basics

GORM is the most popular ORM library for Go.

## Installation

\`\`\`bash
go get -u gorm.io/gorm
go get -u gorm.io/driver/postgres
\`\`\`

## Model Definition

\`\`\`go
type User struct {
    gorm.Model           // ID, CreatedAt, UpdatedAt, DeletedAt
    Name  string
    Email string \`gorm:"uniqueIndex"\`
    Age   int
}
\`\`\`

## CRUD Operations

\`\`\`go
// Create
db.Create(&User{Name: "Alice", Email: "alice@example.com"})

// Read
var user User
db.First(&user, 1)                    // By ID
db.Where("name = ?", "Alice").First(&user)

// Update
db.Model(&user).Update("Age", 30)

// Delete
db.Delete(&user, 1)
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "time"
)

// Simulating GORM model
type Model struct {
    ID        uint
    CreatedAt time.Time
    UpdatedAt time.Time
}

type User struct {
    Model
    Name  string
    Email string
    Age   int
}

type Post struct {
    Model
    Title   string
    Content string
    UserID  uint
}

func main() {
    fmt.Println("GORM ORM Example")
    fmt.Println("=================")
    fmt.Println("")
    fmt.Println("// Connection")
    fmt.Println("db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})")
    fmt.Println("")
    fmt.Println("// Auto Migration")
    fmt.Println("db.AutoMigrate(&User{}, &Post{})")
    fmt.Println("")

    // Simulate GORM operations
    users := []User{
        {Model: Model{ID: 1, CreatedAt: time.Now()}, Name: "Alice", Email: "alice@example.com", Age: 25},
        {Model: Model{ID: 2, CreatedAt: time.Now()}, Name: "Bob", Email: "bob@example.com", Age: 30},
    }

    fmt.Println("// Create")
    fmt.Println("db.Create(&User{Name: \"Alice\", Email: \"alice@example.com\"})")
    fmt.Println("")

    fmt.Println("// Read All")
    fmt.Println("var users []User")
    fmt.Println("db.Find(&users)")
    for _, u := range users {
        fmt.Printf("  User: %s (%s)\\n", u.Name, u.Email)
    }
    fmt.Println("")

    fmt.Println("// Query with Where")
    fmt.Println("db.Where(\"age > ?\", 25).Find(&users)")
    fmt.Println("")

    fmt.Println("// Update")
    fmt.Println("db.Model(&user).Update(\"Age\", 26)")
    fmt.Println("")

    fmt.Println("// Delete (soft delete with gorm.Model)")
    fmt.Println("db.Delete(&user, 1)")
}`,
    keyPoints: [
      "gorm.Model adds ID, timestamps, soft delete",
      "AutoMigrate creates/updates tables",
      "Use struct tags for column options",
      "Preload for eager loading relationships",
      "GORM supports hooks (BeforeCreate, AfterSave)",
    ],
    commonMistakes: [
      "Not checking errors on operations",
      "N+1 queries without Preload",
      "Ignoring soft deletes in queries",
      "Not using transactions properly",
    ],
    bestPractices: [
      "Use migrations for production",
      "Preload associations to avoid N+1",
      "Use Scopes for reusable queries",
      "Enable debug mode during development",
    ],
  },

  "sql-nosql": {
    content: `
# SQL vs NoSQL Comparison

Understanding when to use relational vs document databases.

## SQL Databases (PostgreSQL, MySQL)

**Best For:**
- Complex relationships
- ACID transactions
- Structured data
- Complex queries with JOINs

\`\`\`sql
SELECT u.name, COUNT(p.id)
FROM users u
JOIN posts p ON u.id = p.user_id
GROUP BY u.id
\`\`\`

## NoSQL Databases (MongoDB, Redis)

**Best For:**
- Flexible schemas
- Horizontal scaling
- Document storage
- Caching

\`\`\`json
{
    "name": "Alice",
    "posts": [
        {"title": "First Post"},
        {"title": "Second Post"}
    ]
}
\`\`\`

## Choosing the Right Database

| Factor | SQL | NoSQL |
|--------|-----|-------|
| Schema | Fixed | Flexible |
| Scale | Vertical | Horizontal |
| Consistency | Strong | Eventual |
| Queries | Complex | Simple |
    `,
    code: `package main

import "fmt"

func main() {
    fmt.Println("SQL vs NoSQL Decision Guide")
    fmt.Println("============================")
    fmt.Println("")

    fmt.Println("Choose SQL (PostgreSQL) when:")
    fmt.Println("  ✓ Data has complex relationships")
    fmt.Println("  ✓ Need ACID transactions")
    fmt.Println("  ✓ Data structure is well-defined")
    fmt.Println("  ✓ Need complex queries and aggregations")
    fmt.Println("")

    fmt.Println("Choose NoSQL (MongoDB) when:")
    fmt.Println("  ✓ Schema needs flexibility")
    fmt.Println("  ✓ Need horizontal scaling")
    fmt.Println("  ✓ Working with JSON/document data")
    fmt.Println("  ✓ High write throughput needed")
    fmt.Println("")

    fmt.Println("Choose Redis when:")
    fmt.Println("  ✓ Need caching layer")
    fmt.Println("  ✓ Session storage")
    fmt.Println("  ✓ Real-time leaderboards")
    fmt.Println("  ✓ Pub/Sub messaging")
    fmt.Println("")

    fmt.Println("Common Hybrid Pattern:")
    fmt.Println("  PostgreSQL (primary) + Redis (cache)")
    fmt.Println("")

    fmt.Println("Go Drivers:")
    fmt.Println("  PostgreSQL: github.com/lib/pq")
    fmt.Println("  MongoDB: go.mongodb.org/mongo-driver")
    fmt.Println("  Redis: github.com/go-redis/redis")
}`,
    keyPoints: [
      "SQL is best for relational data",
      "NoSQL excels at horizontal scaling",
      "Consider data access patterns",
      "Many apps use both (polyglot persistence)",
      "Go has excellent drivers for all major databases",
    ],
    commonMistakes: [
      "Choosing NoSQL just because it's trendy",
      "Not considering query patterns upfront",
      "Ignoring transaction requirements",
      "Over-normalizing or over-denormalizing",
    ],
    bestPractices: [
      "Start with PostgreSQL for most apps",
      "Add Redis for caching when needed",
      "Consider MongoDB for truly flexible data",
      "Design for your access patterns",
    ],
  },

  "env-config": {
    content: `
# Environment Configuration

Manage application configuration properly for different environments.

## Environment Variables

\`\`\`go
port := os.Getenv("PORT")
if port == "" {
    port = "8080"
}
\`\`\`

## Using godotenv

\`\`\`bash
go get github.com/joho/godotenv
\`\`\`

\`\`\`go
godotenv.Load()  // Loads .env file
\`\`\`

## Configuration Struct

\`\`\`go
type Config struct {
    Port        string
    DatabaseURL string
    JWTSecret   string
}

func LoadConfig() *Config {
    return &Config{
        Port:        getEnv("PORT", "8080"),
        DatabaseURL: getEnv("DATABASE_URL", ""),
        JWTSecret:   getEnv("JWT_SECRET", ""),
    }
}
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "os"
)

type Config struct {
    Environment string
    Port        string
    DatabaseURL string
    JWTSecret   string
    Debug       bool
}

func getEnv(key, defaultValue string) string {
    if value := os.Getenv(key); value != "" {
        return value
    }
    return defaultValue
}

func getEnvBool(key string, defaultValue bool) bool {
    if value := os.Getenv(key); value != "" {
        return value == "true" || value == "1"
    }
    return defaultValue
}

func LoadConfig() *Config {
    return &Config{
        Environment: getEnv("GO_ENV", "development"),
        Port:        getEnv("PORT", "8080"),
        DatabaseURL: getEnv("DATABASE_URL", "postgres://localhost/mydb"),
        JWTSecret:   getEnv("JWT_SECRET", "dev-secret-change-me"),
        Debug:       getEnvBool("DEBUG", true),
    }
}

func main() {
    // Simulate setting environment variables
    os.Setenv("GO_ENV", "production")
    os.Setenv("PORT", "3000")
    os.Setenv("DEBUG", "false")

    config := LoadConfig()

    fmt.Println("Configuration:")
    fmt.Println("==============")
    fmt.Printf("Environment: %s\\n", config.Environment)
    fmt.Printf("Port: %s\\n", config.Port)
    fmt.Printf("Database URL: %s\\n", config.DatabaseURL)
    fmt.Printf("Debug: %t\\n", config.Debug)
    fmt.Println("")

    fmt.Println(".env file example:")
    fmt.Println("GO_ENV=production")
    fmt.Println("PORT=8080")
    fmt.Println("DATABASE_URL=postgres://user:pass@host/db")
    fmt.Println("JWT_SECRET=your-secret-key")
}`,
    keyPoints: [
      "Never commit secrets to version control",
      "Use .env files for local development",
      "Use environment variables in production",
      "Provide sensible defaults for development",
      "Validate required configuration on startup",
    ],
    commonMistakes: [
      "Hardcoding secrets in code",
      "Committing .env files to git",
      "Not validating required config",
      "Using same secrets in all environments",
    ],
    bestPractices: [
      "Use a config struct for type safety",
      "Load config once at startup",
      "Fail fast if required config is missing",
      "Use different secrets per environment",
    ],
  },

  testing: {
    content: `
# Testing with testing package

Go has a built-in testing framework that's simple yet powerful.

## Test File Naming

Test files must end with \`_test.go\`:
\`\`\`
calculator.go       // Implementation
calculator_test.go  // Tests
\`\`\`

## Writing Tests

\`\`\`go
func TestAdd(t *testing.T) {
    result := Add(2, 3)
    if result != 5 {
        t.Errorf("Add(2, 3) = %d; want 5", result)
    }
}
\`\`\`

## Table-Driven Tests

\`\`\`go
tests := []struct {
    a, b, want int
}{
    {2, 3, 5},
    {0, 0, 0},
    {-1, 1, 0},
}
for _, tt := range tests {
    got := Add(tt.a, tt.b)
    if got != tt.want {
        t.Errorf("Add(%d, %d) = %d; want %d", tt.a, tt.b, got, tt.want)
    }
}
\`\`\`
    `,
    code: `package main

import (
    "fmt"
)

// Functions to test
func Add(a, b int) int {
    return a + b
}

func Divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Simulated test runner
func runTests() {
    fmt.Println("Running tests...")
    fmt.Println("")

    // Test Add function
    testCases := []struct {
        a, b, want int
    }{
        {2, 3, 5},
        {0, 0, 0},
        {-1, 1, 0},
        {100, -100, 0},
    }

    passed := 0
    for _, tc := range testCases {
        got := Add(tc.a, tc.b)
        if got == tc.want {
            fmt.Printf("✓ Add(%d, %d) = %d\\n", tc.a, tc.b, got)
            passed++
        } else {
            fmt.Printf("✗ Add(%d, %d) = %d; want %d\\n", tc.a, tc.b, got, tc.want)
        }
    }

    fmt.Println("")
    fmt.Printf("Passed: %d/%d\\n", passed, len(testCases))

    fmt.Println("")
    fmt.Println("Run tests with: go test -v ./...")
    fmt.Println("With coverage: go test -cover ./...")
}

func main() {
    runTests()
}`,
    keyPoints: [
      "Test files end with _test.go",
      "Test functions start with Test",
      "Use t.Error or t.Fatal to report failures",
      "Table-driven tests are idiomatic",
      "Run with go test ./...",
    ],
    commonMistakes: [
      "Not testing edge cases",
      "Tests that depend on each other",
      "Not using table-driven tests",
      "Testing implementation, not behavior",
    ],
    bestPractices: [
      "Write tests before or with code",
      "Use table-driven tests",
      "Test edge cases and errors",
      "Keep tests independent",
    ],
  },

  debugging: {
    content: `
# Debugging Techniques

Essential techniques for finding and fixing bugs in Go code.

## Print Debugging

\`\`\`go
fmt.Printf("Debug: value = %+v\\n", value)
log.Printf("Processing item %d", id)
\`\`\`

## Using Delve Debugger

\`\`\`bash
# Install
go install github.com/go-delve/delve/cmd/dlv@latest

# Debug
dlv debug main.go

# Commands
(dlv) break main.main
(dlv) continue
(dlv) next
(dlv) print variableName
\`\`\`

## Logging Levels

\`\`\`go
log.SetFlags(log.Ldate | log.Ltime | log.Lshortfile)
log.Println("Info message")
\`\`\`

## Stack Traces

\`\`\`go
debug.PrintStack()  // Print current stack
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "log"
    "runtime"
)

func debugPrint(label string, value interface{}) {
    _, file, line, _ := runtime.Caller(1)
    fmt.Printf("[DEBUG] %s:%d - %s = %+v\\n", file, line, label, value)
}

func processItems(items []string) {
    log.Println("Starting to process items")

    for i, item := range items {
        log.Printf("Processing item %d: %s", i, item)

        // Simulate some processing
        if item == "error" {
            log.Printf("WARNING: Found problematic item at index %d", i)
            continue
        }

        log.Printf("Successfully processed: %s", item)
    }

    log.Println("Finished processing all items")
}

func main() {
    // Configure logging
    log.SetFlags(log.Ltime | log.Lshortfile)

    fmt.Println("Debugging Techniques Demo")
    fmt.Println("=========================")
    fmt.Println("")

    // Debug print with location
    myVar := map[string]int{"a": 1, "b": 2}
    debugPrint("myVar", myVar)
    fmt.Println("")

    // Structured logging example
    items := []string{"first", "error", "third"}
    processItems(items)

    fmt.Println("")
    fmt.Println("Delve Commands:")
    fmt.Println("  dlv debug main.go  - Start debugger")
    fmt.Println("  break main.main    - Set breakpoint")
    fmt.Println("  continue           - Run until breakpoint")
    fmt.Println("  next               - Step over")
    fmt.Println("  step               - Step into")
    fmt.Println("  print <var>        - Print variable")
}`,
    keyPoints: [
      "Use log package instead of fmt for debugging",
      "Include file/line info in logs",
      "Delve is the Go debugger",
      "Use Printf with %+v for structs",
      "Add context to error messages",
    ],
    commonMistakes: [
      "Leaving debug prints in production",
      "Not logging enough context",
      "Ignoring error return values",
      "Not using structured logging",
    ],
    bestPractices: [
      "Use a logging library (logrus, zap)",
      "Include request IDs in logs",
      "Log at appropriate levels",
      "Remove debug code before committing",
    ],
  },

  "blog-1": {
    content: `
# Blog API Project: Setup & Planning

Build a complete blog API with Go, Gin, and PostgreSQL.

## Project Features

- User registration and authentication
- CRUD operations for posts
- Comments system
- Categories and tags
- Pagination and search

## Project Structure

\`\`\`
blog-api/
├── cmd/
│   └── server/main.go
├── internal/
│   ├── handlers/
│   ├── models/
│   ├── repository/
│   └── middleware/
├── pkg/
│   └── utils/
├── go.mod
└── .env
\`\`\`

## Database Schema

\`\`\`sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255),
    created_at TIMESTAMP
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    user_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP
);
\`\`\`
    `,
    code: `package main

import "fmt"

func main() {
    fmt.Println("Blog API Project Structure")
    fmt.Println("==========================")
    fmt.Println("")
    fmt.Println("blog-api/")
    fmt.Println("├── cmd/")
    fmt.Println("│   └── server/")
    fmt.Println("│       └── main.go          # Entry point")
    fmt.Println("├── internal/")
    fmt.Println("│   ├── config/")
    fmt.Println("│   │   └── config.go        # Configuration")
    fmt.Println("│   ├── handlers/")
    fmt.Println("│   │   ├── auth.go          # Auth handlers")
    fmt.Println("│   │   ├── posts.go         # Post handlers")
    fmt.Println("│   │   └── comments.go      # Comment handlers")
    fmt.Println("│   ├── models/")
    fmt.Println("│   │   ├── user.go          # User model")
    fmt.Println("│   │   └── post.go          # Post model")
    fmt.Println("│   ├── repository/")
    fmt.Println("│   │   ├── user_repo.go     # User DB operations")
    fmt.Println("│   │   └── post_repo.go     # Post DB operations")
    fmt.Println("│   └── middleware/")
    fmt.Println("│       └── auth.go          # JWT middleware")
    fmt.Println("├── pkg/")
    fmt.Println("│   └── utils/")
    fmt.Println("│       └── jwt.go           # JWT utilities")
    fmt.Println("├── go.mod")
    fmt.Println("├── go.sum")
    fmt.Println("└── .env")
    fmt.Println("")
    fmt.Println("Initialize with:")
    fmt.Println("  go mod init github.com/username/blog-api")
    fmt.Println("  go get github.com/gin-gonic/gin")
    fmt.Println("  go get gorm.io/gorm gorm.io/driver/postgres")
}`,
    keyPoints: [
      "Use clean architecture principles",
      "Separate concerns into packages",
      "internal/ for private packages",
      "cmd/ for application entry points",
      "pkg/ for reusable utilities",
    ],
    commonMistakes: [
      "Putting everything in main.go",
      "Circular dependencies between packages",
      "Not planning the structure upfront",
      "Mixing business logic with handlers",
    ],
    bestPractices: [
      "Follow Go project layout conventions",
      "Use interfaces for testability",
      "Keep handlers thin",
      "Repository pattern for data access",
    ],
  },

  "blog-2": {
    content: `
# Blog API: User Authentication

Implement secure user registration and login with JWT.

## Password Hashing

\`\`\`go
import "golang.org/x/crypto/bcrypt"

func HashPassword(password string) (string, error) {
    bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
    return string(bytes), err
}

func CheckPassword(password, hash string) bool {
    err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
    return err == nil
}
\`\`\`

## JWT Token Generation

\`\`\`go
token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
    "user_id": user.ID,
    "exp":     time.Now().Add(24 * time.Hour).Unix(),
})
tokenString, _ := token.SignedString([]byte(secret))
\`\`\`

## Auth Endpoints

- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me (protected)
    `,
    code: `package main

import (
    "fmt"
    "time"
)

type User struct {
    ID           uint
    Email        string
    PasswordHash string
    CreatedAt    time.Time
}

type AuthResponse struct {
    Token string \`json:"token"\`
    User  User   \`json:"user"\`
}

func main() {
    fmt.Println("Authentication Implementation")
    fmt.Println("==============================")
    fmt.Println("")

    fmt.Println("// Register Handler")
    fmt.Println("func Register(c *gin.Context) {")
    fmt.Println("    var input RegisterInput")
    fmt.Println("    c.BindJSON(&input)")
    fmt.Println("    ")
    fmt.Println("    hash, _ := bcrypt.GenerateFromPassword(")
    fmt.Println("        []byte(input.Password), bcrypt.DefaultCost)")
    fmt.Println("    ")
    fmt.Println("    user := User{Email: input.Email, PasswordHash: string(hash)}")
    fmt.Println("    db.Create(&user)")
    fmt.Println("    ")
    fmt.Println("    token := generateJWT(user.ID)")
    fmt.Println("    c.JSON(201, AuthResponse{Token: token, User: user})")
    fmt.Println("}")
    fmt.Println("")

    fmt.Println("// Login Handler")
    fmt.Println("func Login(c *gin.Context) {")
    fmt.Println("    var input LoginInput")
    fmt.Println("    c.BindJSON(&input)")
    fmt.Println("    ")
    fmt.Println("    var user User")
    fmt.Println("    db.Where(\"email = ?\", input.Email).First(&user)")
    fmt.Println("    ")
    fmt.Println("    err := bcrypt.CompareHashAndPassword(")
    fmt.Println("        []byte(user.PasswordHash), []byte(input.Password))")
    fmt.Println("    if err != nil {")
    fmt.Println("        c.JSON(401, gin.H{\"error\": \"Invalid credentials\"})")
    fmt.Println("        return")
    fmt.Println("    }")
    fmt.Println("    ")
    fmt.Println("    token := generateJWT(user.ID)")
    fmt.Println("    c.JSON(200, AuthResponse{Token: token, User: user})")
    fmt.Println("}")
}`,
    keyPoints: [
      "Always hash passwords with bcrypt",
      "Use JWT for stateless authentication",
      "Set appropriate token expiration",
      "Validate input before processing",
      "Return consistent error responses",
    ],
    commonMistakes: [
      "Storing plain text passwords",
      "Not validating email format",
      "Too long JWT expiration",
      "Exposing password hash in responses",
    ],
    bestPractices: [
      "Use bcrypt cost of 10-14",
      "Implement refresh tokens",
      "Rate limit auth endpoints",
      "Log failed login attempts",
    ],
  },

  "blog-3": {
    content: `
# Blog API: Post CRUD Operations

Implement Create, Read, Update, Delete for blog posts.

## Post Model

\`\`\`go
type Post struct {
    gorm.Model
    Title     string \`json:"title"\`
    Content   string \`json:"content"\`
    Slug      string \`json:"slug" gorm:"uniqueIndex"\`
    Published bool   \`json:"published"\`
    UserID    uint   \`json:"user_id"\`
    User      User   \`json:"user"\`
}
\`\`\`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/posts | List all posts |
| GET | /api/posts/:id | Get single post |
| POST | /api/posts | Create post |
| PUT | /api/posts/:id | Update post |
| DELETE | /api/posts/:id | Delete post |

## Authorization

Only post authors can update/delete their posts.
    `,
    code: `package main

import "fmt"

func main() {
    fmt.Println("Post CRUD Implementation")
    fmt.Println("========================")
    fmt.Println("")

    fmt.Println("// Create Post")
    fmt.Println("func CreatePost(c *gin.Context) {")
    fmt.Println("    userID := c.GetUint(\"user_id\") // From auth middleware")
    fmt.Println("    ")
    fmt.Println("    var input CreatePostInput")
    fmt.Println("    c.BindJSON(&input)")
    fmt.Println("    ")
    fmt.Println("    post := Post{")
    fmt.Println("        Title:   input.Title,")
    fmt.Println("        Content: input.Content,")
    fmt.Println("        Slug:    slugify(input.Title),")
    fmt.Println("        UserID:  userID,")
    fmt.Println("    }")
    fmt.Println("    db.Create(&post)")
    fmt.Println("    c.JSON(201, post)")
    fmt.Println("}")
    fmt.Println("")

    fmt.Println("// List Posts with Pagination")
    fmt.Println("func ListPosts(c *gin.Context) {")
    fmt.Println("    page, _ := strconv.Atoi(c.DefaultQuery(\"page\", \"1\"))")
    fmt.Println("    limit := 10")
    fmt.Println("    offset := (page - 1) * limit")
    fmt.Println("    ")
    fmt.Println("    var posts []Post")
    fmt.Println("    db.Preload(\"User\").Offset(offset).Limit(limit).Find(&posts)")
    fmt.Println("    ")
    fmt.Println("    var total int64")
    fmt.Println("    db.Model(&Post{}).Count(&total)")
    fmt.Println("    ")
    fmt.Println("    c.JSON(200, gin.H{")
    fmt.Println("        \"data\": posts,")
    fmt.Println("        \"meta\": gin.H{\"page\": page, \"total\": total},")
    fmt.Println("    })")
    fmt.Println("}")
    fmt.Println("")

    fmt.Println("// Update Post (with authorization)")
    fmt.Println("func UpdatePost(c *gin.Context) {")
    fmt.Println("    userID := c.GetUint(\"user_id\")")
    fmt.Println("    postID := c.Param(\"id\")")
    fmt.Println("    ")
    fmt.Println("    var post Post")
    fmt.Println("    db.First(&post, postID)")
    fmt.Println("    ")
    fmt.Println("    if post.UserID != userID {")
    fmt.Println("        c.JSON(403, gin.H{\"error\": \"Not authorized\"})")
    fmt.Println("        return")
    fmt.Println("    }")
    fmt.Println("    ")
    fmt.Println("    c.BindJSON(&post)")
    fmt.Println("    db.Save(&post)")
    fmt.Println("    c.JSON(200, post)")
    fmt.Println("}")
}`,
    keyPoints: [
      "Use Preload for eager loading relationships",
      "Implement pagination for list endpoints",
      "Check authorization before updates/deletes",
      "Generate slugs for SEO-friendly URLs",
      "Return proper HTTP status codes",
    ],
    commonMistakes: [
      "Not checking ownership before updates",
      "Missing pagination on list endpoints",
      "N+1 queries without Preload",
      "Not validating input data",
    ],
    bestPractices: [
      "Use transactions for complex operations",
      "Implement soft deletes",
      "Add search and filtering",
      "Cache frequently accessed posts",
    ],
  },

  "blog-4": {
    content: `
# Blog API: Comments System

Add a commenting system to blog posts.

## Comment Model

\`\`\`go
type Comment struct {
    gorm.Model
    Content  string \`json:"content"\`
    PostID   uint   \`json:"post_id"\`
    UserID   uint   \`json:"user_id"\`
    ParentID *uint  \`json:"parent_id"\` // For nested comments
    Post     Post   \`json:"post"\`
    User     User   \`json:"user"\`
}
\`\`\`

## Nested Comments

Support reply threads with parent_id:

\`\`\`go
func GetComments(postID uint) []Comment {
    var comments []Comment
    db.Where("post_id = ? AND parent_id IS NULL", postID).
        Preload("User").
        Preload("Replies.User").
        Find(&comments)
    return comments
}
\`\`\`
    `,
    code: `package main

import "fmt"

func main() {
    fmt.Println("Comments System Implementation")
    fmt.Println("===============================")
    fmt.Println("")

    fmt.Println("// Comment Model")
    fmt.Println("type Comment struct {")
    fmt.Println("    gorm.Model")
    fmt.Println("    Content  string    \`json:\"content\"\`")
    fmt.Println("    PostID   uint      \`json:\"post_id\"\`")
    fmt.Println("    UserID   uint      \`json:\"user_id\"\`")
    fmt.Println("    ParentID *uint     \`json:\"parent_id\"\`")
    fmt.Println("    User     User      \`json:\"user\"\`")
    fmt.Println("    Replies  []Comment \`json:\"replies\" gorm:\"foreignKey:ParentID\"\`")
    fmt.Println("}")
    fmt.Println("")

    fmt.Println("// Create Comment Handler")
    fmt.Println("func CreateComment(c *gin.Context) {")
    fmt.Println("    postID := c.Param(\"post_id\")")
    fmt.Println("    userID := c.GetUint(\"user_id\")")
    fmt.Println("    ")
    fmt.Println("    var input struct {")
    fmt.Println("        Content  string \`json:\"content\" binding:\"required\"\`")
    fmt.Println("        ParentID *uint  \`json:\"parent_id\"\`")
    fmt.Println("    }")
    fmt.Println("    c.BindJSON(&input)")
    fmt.Println("    ")
    fmt.Println("    comment := Comment{")
    fmt.Println("        Content:  input.Content,")
    fmt.Println("        PostID:   parseUint(postID),")
    fmt.Println("        UserID:   userID,")
    fmt.Println("        ParentID: input.ParentID,")
    fmt.Println("    }")
    fmt.Println("    db.Create(&comment)")
    fmt.Println("    db.Preload(\"User\").First(&comment, comment.ID)")
    fmt.Println("    c.JSON(201, comment)")
    fmt.Println("}")
    fmt.Println("")

    fmt.Println("// Get Comments with Replies")
    fmt.Println("func GetComments(c *gin.Context) {")
    fmt.Println("    postID := c.Param(\"post_id\")")
    fmt.Println("    ")
    fmt.Println("    var comments []Comment")
    fmt.Println("    db.Where(\"post_id = ? AND parent_id IS NULL\", postID).")
    fmt.Println("        Preload(\"User\").")
    fmt.Println("        Preload(\"Replies.User\").")
    fmt.Println("        Order(\"created_at DESC\").")
    fmt.Println("        Find(&comments)")
    fmt.Println("    ")
    fmt.Println("    c.JSON(200, comments)")
    fmt.Println("}")
}`,
    keyPoints: [
      "Use nullable ParentID for nested comments",
      "Preload relationships to avoid N+1",
      "Order comments by creation date",
      "Limit nesting depth for performance",
      "Consider pagination for many comments",
    ],
    commonMistakes: [
      "Infinite nesting without limits",
      "Not preloading user data",
      "Missing authorization checks",
      "Not handling deleted parent comments",
    ],
    bestPractices: [
      "Limit reply depth (2-3 levels)",
      "Add comment count to posts",
      "Implement comment moderation",
      "Send notifications for replies",
    ],
  },

  "blog-5": {
    content: `
# Blog API: Categories & Tags

Organize posts with categories and tags.

## Models

\`\`\`go
type Category struct {
    gorm.Model
    Name  string \`json:"name" gorm:"uniqueIndex"\`
    Slug  string \`json:"slug" gorm:"uniqueIndex"\`
    Posts []Post \`json:"posts"\`
}

type Tag struct {
    gorm.Model
    Name  string \`json:"name" gorm:"uniqueIndex"\`
    Posts []Post \`json:"posts" gorm:"many2many:post_tags"\`
}

type Post struct {
    // ... other fields
    CategoryID uint     \`json:"category_id"\`
    Category   Category \`json:"category"\`
    Tags       []Tag    \`json:"tags" gorm:"many2many:post_tags"\`
}
\`\`\`

## Many-to-Many Relationship

GORM handles the join table automatically with \`many2many\` tag.
    `,
    code: `package main

import "fmt"

func main() {
    fmt.Println("Categories & Tags Implementation")
    fmt.Println("=================================")
    fmt.Println("")

    fmt.Println("// Create Post with Tags")
    fmt.Println("func CreatePost(c *gin.Context) {")
    fmt.Println("    var input struct {")
    fmt.Println("        Title      string   \`json:\"title\"\`")
    fmt.Println("        Content    string   \`json:\"content\"\`")
    fmt.Println("        CategoryID uint     \`json:\"category_id\"\`")
    fmt.Println("        TagIDs     []uint   \`json:\"tag_ids\"\`")
    fmt.Println("    }")
    fmt.Println("    c.BindJSON(&input)")
    fmt.Println("    ")
    fmt.Println("    // Get tags")
    fmt.Println("    var tags []Tag")
    fmt.Println("    db.Find(&tags, input.TagIDs)")
    fmt.Println("    ")
    fmt.Println("    post := Post{")
    fmt.Println("        Title:      input.Title,")
    fmt.Println("        Content:    input.Content,")
    fmt.Println("        CategoryID: input.CategoryID,")
    fmt.Println("        Tags:       tags,")
    fmt.Println("    }")
    fmt.Println("    db.Create(&post)")
    fmt.Println("    c.JSON(201, post)")
    fmt.Println("}")
    fmt.Println("")

    fmt.Println("// Filter Posts by Category")
    fmt.Println("func GetPostsByCategory(c *gin.Context) {")
    fmt.Println("    slug := c.Param(\"slug\")")
    fmt.Println("    ")
    fmt.Println("    var category Category")
    fmt.Println("    db.Where(\"slug = ?\", slug).First(&category)")
    fmt.Println("    ")
    fmt.Println("    var posts []Post")
    fmt.Println("    db.Where(\"category_id = ?\", category.ID).")
    fmt.Println("        Preload(\"Tags\").")
    fmt.Println("        Find(&posts)")
    fmt.Println("    ")
    fmt.Println("    c.JSON(200, posts)")
    fmt.Println("}")
    fmt.Println("")

    fmt.Println("// Filter Posts by Tag")
    fmt.Println("func GetPostsByTag(c *gin.Context) {")
    fmt.Println("    tagSlug := c.Param(\"slug\")")
    fmt.Println("    ")
    fmt.Println("    var posts []Post")
    fmt.Println("    db.Joins(\"JOIN post_tags ON posts.id = post_tags.post_id\").")
    fmt.Println("        Joins(\"JOIN tags ON tags.id = post_tags.tag_id\").")
    fmt.Println("        Where(\"tags.slug = ?\", tagSlug).")
    fmt.Println("        Find(&posts)")
    fmt.Println("    ")
    fmt.Println("    c.JSON(200, posts)")
    fmt.Println("}")
}`,
    keyPoints: [
      "Use many2many for tag relationships",
      "Categories are one-to-many",
      "Generate slugs for SEO-friendly URLs",
      "Preload associations when needed",
      "Use joins for filtering by tags",
    ],
    commonMistakes: [
      "Not handling duplicate tags",
      "Missing indexes on slug columns",
      "Not cleaning up orphaned tags",
      "Complex queries without indexes",
    ],
    bestPractices: [
      "Limit number of tags per post",
      "Create tag cloud with counts",
      "Use slugs for URLs",
      "Cache category/tag lists",
    ],
  },

  "blog-6": {
    content: `
# Blog API: Search & Filtering

Implement search and advanced filtering for posts.

## Full-Text Search

PostgreSQL full-text search:

\`\`\`go
db.Where("to_tsvector('english', title || ' ' || content) @@ plainto_tsquery(?)", query)
\`\`\`

## Query Parameters

\`\`\`
GET /api/posts?search=golang&category=tutorials&tags=beginner,web&sort=created_at&order=desc&page=1
\`\`\`

## Filter Builder

\`\`\`go
func BuildQuery(c *gin.Context) *gorm.DB {
    query := db.Model(&Post{})

    if search := c.Query("search"); search != "" {
        query = query.Where("title ILIKE ?", "%"+search+"%")
    }
    if category := c.Query("category"); category != "" {
        query = query.Where("category_id = ?", category)
    }

    return query
}
\`\`\`
    `,
    code: `package main

import "fmt"

func main() {
    fmt.Println("Search & Filtering Implementation")
    fmt.Println("==================================")
    fmt.Println("")

    fmt.Println("// Advanced Search Handler")
    fmt.Println("func SearchPosts(c *gin.Context) {")
    fmt.Println("    query := db.Model(&Post{}).Preload(\"Category\").Preload(\"Tags\")")
    fmt.Println("    ")
    fmt.Println("    // Text search")
    fmt.Println("    if search := c.Query(\"q\"); search != \"\" {")
    fmt.Println("        query = query.Where(")
    fmt.Println("            \"title ILIKE ? OR content ILIKE ?\",")
    fmt.Println("            \"%\"+search+\"%\", \"%\"+search+\"%\")")
    fmt.Println("    }")
    fmt.Println("    ")
    fmt.Println("    // Category filter")
    fmt.Println("    if cat := c.Query(\"category\"); cat != \"\" {")
    fmt.Println("        query = query.Where(\"category_id = ?\", cat)")
    fmt.Println("    }")
    fmt.Println("    ")
    fmt.Println("    // Published filter")
    fmt.Println("    if pub := c.Query(\"published\"); pub != \"\" {")
    fmt.Println("        query = query.Where(\"published = ?\", pub == \"true\")")
    fmt.Println("    }")
    fmt.Println("    ")
    fmt.Println("    // Date range")
    fmt.Println("    if from := c.Query(\"from\"); from != \"\" {")
    fmt.Println("        query = query.Where(\"created_at >= ?\", from)")
    fmt.Println("    }")
    fmt.Println("    if to := c.Query(\"to\"); to != \"\" {")
    fmt.Println("        query = query.Where(\"created_at <= ?\", to)")
    fmt.Println("    }")
    fmt.Println("    ")
    fmt.Println("    // Sorting")
    fmt.Println("    sortBy := c.DefaultQuery(\"sort\", \"created_at\")")
    fmt.Println("    order := c.DefaultQuery(\"order\", \"desc\")")
    fmt.Println("    query = query.Order(sortBy + \" \" + order)")
    fmt.Println("    ")
    fmt.Println("    // Pagination")
    fmt.Println("    page, _ := strconv.Atoi(c.DefaultQuery(\"page\", \"1\"))")
    fmt.Println("    limit := 10")
    fmt.Println("    query = query.Offset((page - 1) * limit).Limit(limit)")
    fmt.Println("    ")
    fmt.Println("    var posts []Post")
    fmt.Println("    query.Find(&posts)")
    fmt.Println("    ")
    fmt.Println("    c.JSON(200, posts)")
    fmt.Println("}")
}`,
    keyPoints: [
      "Use ILIKE for case-insensitive search",
      "Chain query conditions dynamically",
      "Validate and sanitize query parameters",
      "Add indexes for searchable columns",
      "Consider full-text search for large datasets",
    ],
    commonMistakes: [
      "SQL injection through unsanitized input",
      "Missing indexes on filtered columns",
      "Not limiting results",
      "Complex queries without optimization",
    ],
    bestPractices: [
      "Use parameterized queries",
      "Add database indexes",
      "Implement search suggestions",
      "Cache common search results",
    ],
  },

  "blog-7": {
    content: `
# Blog API: Image Upload

Handle file uploads for post images.

## Multipart Form Handling

\`\`\`go
func UploadImage(c *gin.Context) {
    file, err := c.FormFile("image")
    if err != nil {
        c.JSON(400, gin.H{"error": "No file uploaded"})
        return
    }

    // Save file
    filename := uuid.New().String() + filepath.Ext(file.Filename)
    path := filepath.Join("uploads", filename)
    c.SaveUploadedFile(file, path)

    c.JSON(200, gin.H{"url": "/uploads/" + filename})
}
\`\`\`

## Validation

- Check file size limits
- Validate file types (MIME type)
- Generate unique filenames
- Consider cloud storage (S3)
    `,
    code: `package main

import "fmt"

func main() {
    fmt.Println("Image Upload Implementation")
    fmt.Println("============================")
    fmt.Println("")

    fmt.Println("// Upload Handler")
    fmt.Println("func UploadImage(c *gin.Context) {")
    fmt.Println("    // Get file from form")
    fmt.Println("    file, err := c.FormFile(\"image\")")
    fmt.Println("    if err != nil {")
    fmt.Println("        c.JSON(400, gin.H{\"error\": \"No file uploaded\"})")
    fmt.Println("        return")
    fmt.Println("    }")
    fmt.Println("    ")
    fmt.Println("    // Validate file size (max 5MB)")
    fmt.Println("    if file.Size > 5*1024*1024 {")
    fmt.Println("        c.JSON(400, gin.H{\"error\": \"File too large\"})")
    fmt.Println("        return")
    fmt.Println("    }")
    fmt.Println("    ")
    fmt.Println("    // Validate file type")
    fmt.Println("    allowed := map[string]bool{")
    fmt.Println("        \"image/jpeg\": true,")
    fmt.Println("        \"image/png\":  true,")
    fmt.Println("        \"image/gif\":  true,")
    fmt.Println("    }")
    fmt.Println("    if !allowed[file.Header.Get(\"Content-Type\")] {")
    fmt.Println("        c.JSON(400, gin.H{\"error\": \"Invalid file type\"})")
    fmt.Println("        return")
    fmt.Println("    }")
    fmt.Println("    ")
    fmt.Println("    // Generate unique filename")
    fmt.Println("    ext := filepath.Ext(file.Filename)")
    fmt.Println("    filename := uuid.New().String() + ext")
    fmt.Println("    path := filepath.Join(\"uploads\", filename)")
    fmt.Println("    ")
    fmt.Println("    // Save file")
    fmt.Println("    if err := c.SaveUploadedFile(file, path); err != nil {")
    fmt.Println("        c.JSON(500, gin.H{\"error\": \"Failed to save file\"})")
    fmt.Println("        return")
    fmt.Println("    }")
    fmt.Println("    ")
    fmt.Println("    c.JSON(200, gin.H{")
    fmt.Println("        \"url\": \"/uploads/\" + filename,")
    fmt.Println("        \"size\": file.Size,")
    fmt.Println("    })")
    fmt.Println("}")
    fmt.Println("")

    fmt.Println("// Serve static files")
    fmt.Println("r.Static(\"/uploads\", \"./uploads\")")
}`,
    keyPoints: [
      "Validate file size and type",
      "Generate unique filenames",
      "Store files outside web root",
      "Consider cloud storage for production",
      "Serve static files efficiently",
    ],
    commonMistakes: [
      "Not validating file types",
      "Using original filenames (security risk)",
      "No file size limits",
      "Storing files in database",
    ],
    bestPractices: [
      "Use cloud storage (S3, GCS)",
      "Generate thumbnails for images",
      "Implement CDN for serving",
      "Clean up orphaned files",
    ],
  },

  "blog-8": {
    content: `
# Blog API: Deployment & Testing

Prepare the blog API for production deployment.

## Testing

\`\`\`go
func TestCreatePost(t *testing.T) {
    router := setupRouter()

    w := httptest.NewRecorder()
    body := \`{"title":"Test","content":"Content"}\`
    req, _ := http.NewRequest("POST", "/api/posts", strings.NewReader(body))
    req.Header.Set("Authorization", "Bearer "+token)

    router.ServeHTTP(w, req)

    assert.Equal(t, 201, w.Code)
}
\`\`\`

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] HTTPS enabled
- [ ] CORS configured
- [ ] Rate limiting enabled
- [ ] Logging configured
- [ ] Health check endpoint
    `,
    code: `package main

import "fmt"

func main() {
    fmt.Println("Deployment & Testing")
    fmt.Println("====================")
    fmt.Println("")

    fmt.Println("// Health Check Endpoint")
    fmt.Println("r.GET(\"/health\", func(c *gin.Context) {")
    fmt.Println("    c.JSON(200, gin.H{")
    fmt.Println("        \"status\": \"healthy\",")
    fmt.Println("        \"version\": \"1.0.0\",")
    fmt.Println("    })")
    fmt.Println("})")
    fmt.Println("")

    fmt.Println("// Graceful Shutdown")
    fmt.Println("srv := &http.Server{Addr: \":8080\", Handler: r}")
    fmt.Println("")
    fmt.Println("go func() {")
    fmt.Println("    srv.ListenAndServe()")
    fmt.Println("}()")
    fmt.Println("")
    fmt.Println("quit := make(chan os.Signal, 1)")
    fmt.Println("signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)")
    fmt.Println("<-quit")
    fmt.Println("")
    fmt.Println("ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)")
    fmt.Println("defer cancel()")
    fmt.Println("srv.Shutdown(ctx)")
    fmt.Println("")

    fmt.Println("Deployment Checklist:")
    fmt.Println("=====================")
    fmt.Println("✓ Set GIN_MODE=release")
    fmt.Println("✓ Configure DATABASE_URL")
    fmt.Println("✓ Set JWT_SECRET (strong, unique)")
    fmt.Println("✓ Enable HTTPS")
    fmt.Println("✓ Configure CORS origins")
    fmt.Println("✓ Add rate limiting")
    fmt.Println("✓ Set up logging (JSON format)")
    fmt.Println("✓ Add health check endpoint")
    fmt.Println("✓ Configure graceful shutdown")
    fmt.Println("✓ Run database migrations")
    fmt.Println("")

    fmt.Println("Docker Deployment:")
    fmt.Println("  docker build -t blog-api .")
    fmt.Println("  docker run -p 8080:8080 blog-api")
}`,
    keyPoints: [
      "Write tests for all endpoints",
      "Use httptest for HTTP testing",
      "Implement graceful shutdown",
      "Add health check endpoints",
      "Configure for production environment",
    ],
    commonMistakes: [
      "Not testing error cases",
      "Missing graceful shutdown",
      "Debug mode in production",
      "Hardcoded configuration",
    ],
    bestPractices: [
      "Use CI/CD for deployments",
      "Monitor application metrics",
      "Set up alerting",
      "Use container orchestration",
    ],
  },

  // ============================================
  // ADVANCED MODULE
  // ============================================

  microservices: {
    content: `
# Microservices Architecture

Design and build microservices with Go.

## What are Microservices?

- Small, independent services
- Single responsibility
- Communicate via APIs
- Independently deployable

## Service Communication

\`\`\`
┌─────────┐     HTTP/gRPC     ┌─────────┐
│ Service │ ◄───────────────► │ Service │
│    A    │                   │    B    │
└─────────┘                   └─────────┘
      │                             │
      └──────────┬──────────────────┘
                 │
           ┌─────▼─────┐
           │  Message  │
           │   Queue   │
           └───────────┘
\`\`\`

## Key Patterns

- API Gateway
- Service Discovery
- Circuit Breaker
- Event Sourcing
    `,
    code: `package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "sync"
    "time"
)

// UserService - handles user operations
type UserService struct {
    users map[int]User
    mu    sync.RWMutex
}

type User struct {
    ID    int    \`json:"id"\`
    Name  string \`json:"name"\`
    Email string \`json:"email"\`
}

func NewUserService() *UserService {
    return &UserService{
        users: map[int]User{
            1: {ID: 1, Name: "Alice", Email: "alice@example.com"},
            2: {ID: 2, Name: "Bob", Email: "bob@example.com"},
        },
    }
}

func (s *UserService) GetUser(id int) (User, bool) {
    s.mu.RLock()
    defer s.mu.RUnlock()
    user, ok := s.users[id]
    return user, ok
}

// ProductService - handles product catalog
type ProductService struct {
    products map[int]Product
}

type Product struct {
    ID    int     \`json:"id"\`
    Name  string  \`json:"name"\`
    Price float64 \`json:"price"\`
}

func NewProductService() *ProductService {
    return &ProductService{
        products: map[int]Product{
            1: {ID: 1, Name: "Laptop", Price: 999.99},
            2: {ID: 2, Name: "Phone", Price: 599.99},
        },
    }
}

func (s *ProductService) GetProduct(id int) (Product, bool) {
    product, ok := s.products[id]
    return product, ok
}

// API Gateway - routes requests to services
type APIGateway struct {
    userService    *UserService
    productService *ProductService
}

func (g *APIGateway) HandleRequest(service string, id int) interface{} {
    switch service {
    case "users":
        if user, ok := g.userService.GetUser(id); ok {
            return user
        }
    case "products":
        if product, ok := g.productService.GetProduct(id); ok {
            return product
        }
    }
    return map[string]string{"error": "not found"}
}

func main() {
    // Initialize microservices
    userSvc := NewUserService()
    productSvc := NewProductService()

    gateway := &APIGateway{
        userService:    userSvc,
        productService: productSvc,
    }

    fmt.Println("=== Microservices Demo ===")
    fmt.Println()

    // Simulate API requests through gateway
    fmt.Println("GET /users/1")
    result := gateway.HandleRequest("users", 1)
    data, _ := json.MarshalIndent(result, "", "  ")
    fmt.Println(string(data))
    fmt.Println()

    fmt.Println("GET /products/1")
    result = gateway.HandleRequest("products", 1)
    data, _ = json.MarshalIndent(result, "", "  ")
    fmt.Println(string(data))
    fmt.Println()

    // Demonstrate concurrent requests
    fmt.Println("=== Concurrent Requests ===")
    var wg sync.WaitGroup
    start := time.Now()

    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go func(id int) {
            defer wg.Done()
            user, _ := userSvc.GetUser(id % 2 + 1)
            fmt.Printf("Fetched user: %s\\n", user.Name)
        }(i)
    }

    wg.Wait()
    fmt.Printf("All requests completed in %v\\n", time.Since(start))
}`,
    keyPoints: [
      "Each service owns its data",
      "Services communicate via APIs",
      "Design for failure",
      "Use async communication when possible",
      "Implement proper monitoring",
    ],
    commonMistakes: [
      "Making services too small",
      "Sharing databases between services",
      "Synchronous communication everywhere",
      "Not handling partial failures",
    ],
    bestPractices: [
      "Start with a monolith, extract services",
      "Use domain-driven design",
      "Implement circuit breakers",
      "Centralize logging and tracing",
    ],
  },

  grpc: {
    content: `
# gRPC & Protocol Buffers

Build high-performance APIs with gRPC.

## What is gRPC?

- High-performance RPC framework
- Uses Protocol Buffers for serialization
- Supports streaming
- Strong typing with code generation

## Protocol Buffer Definition

\`\`\`protobuf
syntax = "proto3";

service UserService {
    rpc GetUser(GetUserRequest) returns (User);
    rpc ListUsers(ListUsersRequest) returns (stream User);
}

message User {
    int32 id = 1;
    string name = 2;
    string email = 3;
}
\`\`\`

## Generate Go Code

\`\`\`bash
protoc --go_out=. --go-grpc_out=. user.proto
\`\`\`
    `,
    code: `package main

import (
    "bytes"
    "encoding/binary"
    "encoding/json"
    "fmt"
)

// Simulating Protocol Buffer encoding concepts
// In real gRPC, you'd use generated code from .proto files

// Message represents a gRPC-style message
type Message struct {
    fields map[int]interface{}
}

func NewMessage() *Message {
    return &Message{fields: make(map[int]interface{})}
}

func (m *Message) SetInt(fieldNum int, value int32) {
    m.fields[fieldNum] = value
}

func (m *Message) SetString(fieldNum int, value string) {
    m.fields[fieldNum] = value
}

func (m *Message) Encode() []byte {
    var buf bytes.Buffer
    for fieldNum, value := range m.fields {
        // Write field number (varint encoding simplified)
        buf.WriteByte(byte(fieldNum << 3))
        switch v := value.(type) {
        case int32:
            binary.Write(&buf, binary.LittleEndian, v)
        case string:
            buf.WriteByte(byte(len(v)))
            buf.WriteString(v)
        }
    }
    return buf.Bytes()
}

// User represents a protobuf message
type User struct {
    ID    int32  \`json:"id"\`
    Name  string \`json:"name"\`
    Email string \`json:"email"\`
}

// UserService simulates a gRPC service
type UserService struct {
    users map[int32]User
}

func NewUserService() *UserService {
    return &UserService{
        users: map[int32]User{
            1: {ID: 1, Name: "Alice", Email: "alice@example.com"},
            2: {ID: 2, Name: "Bob", Email: "bob@example.com"},
        },
    }
}

// GetUser simulates a unary RPC call
func (s *UserService) GetUser(id int32) (*User, error) {
    if user, ok := s.users[id]; ok {
        return &user, nil
    }
    return nil, fmt.Errorf("user not found: %d", id)
}

// ListUsers simulates a server-streaming RPC
func (s *UserService) ListUsers() <-chan User {
    ch := make(chan User)
    go func() {
        defer close(ch)
        for _, user := range s.users {
            ch <- user
        }
    }()
    return ch
}

func main() {
    fmt.Println("=== gRPC Concepts Demo ===")
    fmt.Println()

    // Demonstrate protobuf-style encoding
    fmt.Println("1. Protocol Buffer Encoding:")
    msg := NewMessage()
    msg.SetInt(1, 42)
    msg.SetString(2, "Hello")
    encoded := msg.Encode()
    fmt.Printf("   Encoded bytes: %v\\n", encoded)
    fmt.Printf("   Size: %d bytes (vs JSON would be larger)\\n", len(encoded))
    fmt.Println()

    // Simulate gRPC service calls
    fmt.Println("2. Unary RPC Call (GetUser):")
    service := NewUserService()
    user, err := service.GetUser(1)
    if err == nil {
        data, _ := json.MarshalIndent(user, "   ", "  ")
        fmt.Println("   " + string(data))
    }
    fmt.Println()

    // Simulate streaming RPC
    fmt.Println("3. Server Streaming RPC (ListUsers):")
    for user := range service.ListUsers() {
        fmt.Printf("   Received: %s <%s>\\n", user.Name, user.Email)
    }
    fmt.Println()

    // Compare serialization sizes
    fmt.Println("4. Size Comparison (Protobuf vs JSON):")
    jsonData, _ := json.Marshal(user)
    fmt.Printf("   JSON size: %d bytes\\n", len(jsonData))
    fmt.Printf("   Protobuf would be ~40%% smaller\\n")
}`,
    keyPoints: [
      "gRPC is faster than REST for internal services",
      "Protocol Buffers provide strong typing",
      "Supports unary, server streaming, client streaming, bidirectional",
      "Code generation ensures type safety",
      "Built-in support for deadlines and cancellation",
    ],
    commonMistakes: [
      "Using gRPC for browser clients (use gRPC-Web)",
      "Not handling context cancellation",
      "Ignoring error codes",
      "Large message sizes",
    ],
    bestPractices: [
      "Use gRPC for service-to-service communication",
      "Implement proper error handling",
      "Use interceptors for logging/auth",
      "Version your proto files",
    ],
  },

  jwt: {
    content: `
# JWT Authentication

Implement secure JWT-based authentication.

## JWT Structure

\`\`\`
header.payload.signature

Header: {"alg": "HS256", "typ": "JWT"}
Payload: {"user_id": 1, "exp": 1234567890}
Signature: HMACSHA256(base64(header) + "." + base64(payload), secret)
\`\`\`

## Creating Tokens

\`\`\`go
token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
    "user_id": user.ID,
    "exp":     time.Now().Add(24 * time.Hour).Unix(),
})
tokenString, _ := token.SignedString([]byte(secret))
\`\`\`

## Validating Tokens

\`\`\`go
token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
    return []byte(secret), nil
})
claims := token.Claims.(jwt.MapClaims)
userID := claims["user_id"]
\`\`\`
    `,
    code: `package main

import (
    "crypto/hmac"
    "crypto/sha256"
    "encoding/base64"
    "encoding/json"
    "fmt"
    "strings"
    "time"
)

// JWT implementation from scratch to understand the concepts

type Header struct {
    Alg string \`json:"alg"\`
    Typ string \`json:"typ"\`
}

type Claims struct {
    UserID   int    \`json:"user_id"\`
    Username string \`json:"username"\`
    Role     string \`json:"role"\`
    Exp      int64  \`json:"exp"\`
    Iat      int64  \`json:"iat"\`
}

func base64URLEncode(data []byte) string {
    return strings.TrimRight(base64.URLEncoding.EncodeToString(data), "=")
}

func base64URLDecode(s string) ([]byte, error) {
    // Add padding if needed
    switch len(s) % 4 {
    case 2:
        s += "=="
    case 3:
        s += "="
    }
    return base64.URLEncoding.DecodeString(s)
}

// CreateToken generates a JWT token
func CreateToken(claims Claims, secret string) string {
    // 1. Create header
    header := Header{Alg: "HS256", Typ: "JWT"}
    headerJSON, _ := json.Marshal(header)
    headerEncoded := base64URLEncode(headerJSON)

    // 2. Create payload
    claims.Iat = time.Now().Unix()
    if claims.Exp == 0 {
        claims.Exp = time.Now().Add(24 * time.Hour).Unix()
    }
    payloadJSON, _ := json.Marshal(claims)
    payloadEncoded := base64URLEncode(payloadJSON)

    // 3. Create signature
    message := headerEncoded + "." + payloadEncoded
    h := hmac.New(sha256.New, []byte(secret))
    h.Write([]byte(message))
    signature := base64URLEncode(h.Sum(nil))

    return message + "." + signature
}

// ValidateToken verifies and parses a JWT token
func ValidateToken(tokenString, secret string) (*Claims, error) {
    parts := strings.Split(tokenString, ".")
    if len(parts) != 3 {
        return nil, fmt.Errorf("invalid token format")
    }

    // Verify signature
    message := parts[0] + "." + parts[1]
    h := hmac.New(sha256.New, []byte(secret))
    h.Write([]byte(message))
    expectedSig := base64URLEncode(h.Sum(nil))

    if parts[2] != expectedSig {
        return nil, fmt.Errorf("invalid signature")
    }

    // Decode claims
    payloadJSON, err := base64URLDecode(parts[1])
    if err != nil {
        return nil, err
    }

    var claims Claims
    if err := json.Unmarshal(payloadJSON, &claims); err != nil {
        return nil, err
    }

    // Check expiration
    if claims.Exp < time.Now().Unix() {
        return nil, fmt.Errorf("token expired")
    }

    return &claims, nil
}

func main() {
    secret := "my-super-secret-key-123"

    fmt.Println("=== JWT Authentication Demo ===")
    fmt.Println()

    // Create a token
    claims := Claims{
        UserID:   1,
        Username: "alice",
        Role:     "admin",
    }

    token := CreateToken(claims, secret)
    fmt.Println("1. Generated JWT Token:")
    fmt.Println("   " + token[:50] + "...")
    fmt.Println()

    // Show token parts
    parts := strings.Split(token, ".")
    fmt.Println("2. Token Structure:")
    headerJSON, _ := base64URLDecode(parts[0])
    fmt.Printf("   Header:  %s\\n", headerJSON)
    payloadJSON, _ := base64URLDecode(parts[1])
    fmt.Printf("   Payload: %s\\n", payloadJSON)
    fmt.Printf("   Signature: %s...\\n", parts[2][:20])
    fmt.Println()

    // Validate token
    fmt.Println("3. Token Validation:")
    validClaims, err := ValidateToken(token, secret)
    if err != nil {
        fmt.Printf("   Error: %v\\n", err)
    } else {
        fmt.Printf("   Valid! User: %s (ID: %d, Role: %s)\\n",
            validClaims.Username, validClaims.UserID, validClaims.Role)
    }
    fmt.Println()

    // Try with wrong secret
    fmt.Println("4. Invalid Secret Test:")
    _, err = ValidateToken(token, "wrong-secret")
    fmt.Printf("   Result: %v\\n", err)
}`,
    keyPoints: [
      "JWTs are stateless authentication tokens",
      "Always verify signature before trusting claims",
      "Set appropriate expiration times",
      "Use HTTPS to prevent token interception",
      "Store secrets securely",
    ],
    commonMistakes: [
      "Storing sensitive data in JWT payload",
      "Not validating token expiration",
      "Using weak secrets",
      "Not handling token refresh",
    ],
    bestPractices: [
      "Use short-lived access tokens",
      "Implement refresh token rotation",
      "Blacklist tokens on logout",
      "Use RS256 for distributed systems",
    ],
  },

  oauth2: {
    content: `
# OAuth2 Integration

Implement OAuth2 for third-party authentication.

## OAuth2 Flow

\`\`\`
1. User clicks "Login with Google"
2. Redirect to Google's auth page
3. User grants permission
4. Google redirects back with code
5. Exchange code for access token
6. Fetch user info with token
\`\`\`

## Configuration

\`\`\`go
var googleOauthConfig = &oauth2.Config{
    ClientID:     os.Getenv("GOOGLE_CLIENT_ID"),
    ClientSecret: os.Getenv("GOOGLE_CLIENT_SECRET"),
    RedirectURL:  "http://localhost:8080/auth/google/callback",
    Scopes:       []string{"email", "profile"},
    Endpoint:     google.Endpoint,
}
\`\`\`

## Callback Handler

Exchange the authorization code for tokens and fetch user info.
    `,
    code: `package main

import (
    "crypto/rand"
    "encoding/base64"
    "encoding/json"
    "fmt"
    "net/url"
    "time"
)

// OAuth2 flow simulation - demonstrates the concepts

// OAuthConfig holds OAuth2 configuration
type OAuthConfig struct {
    ClientID     string
    ClientSecret string
    AuthURL      string
    TokenURL     string
    RedirectURL  string
    Scopes       []string
}

// Token represents an OAuth2 token
type Token struct {
    AccessToken  string \`json:"access_token"\`
    TokenType    string \`json:"token_type"\`
    ExpiresIn    int    \`json:"expires_in"\`
    RefreshToken string \`json:"refresh_token"\`
}

// UserInfo from OAuth provider
type UserInfo struct {
    ID      string \`json:"id"\`
    Email   string \`json:"email"\`
    Name    string \`json:"name"\`
    Picture string \`json:"picture"\`
}

// Generate random state for CSRF protection
func generateState() string {
    b := make([]byte, 16)
    rand.Read(b)
    return base64.URLEncoding.EncodeToString(b)
}

// BuildAuthURL creates the authorization URL
func (c *OAuthConfig) BuildAuthURL(state string) string {
    params := url.Values{}
    params.Set("client_id", c.ClientID)
    params.Set("redirect_uri", c.RedirectURL)
    params.Set("response_type", "code")
    params.Set("scope", "email profile")
    params.Set("state", state)
    return c.AuthURL + "?" + params.Encode()
}

// SimulateTokenExchange simulates exchanging code for token
func (c *OAuthConfig) SimulateTokenExchange(code string) *Token {
    // In real implementation, this makes HTTP POST to TokenURL
    return &Token{
        AccessToken:  "ya29.simulated-access-token-" + code[:8],
        TokenType:    "Bearer",
        ExpiresIn:    3600,
        RefreshToken: "1//simulated-refresh-token",
    }
}

// SimulateUserInfo simulates fetching user info
func SimulateUserInfo(accessToken string) *UserInfo {
    // In real implementation, this calls the userinfo endpoint
    return &UserInfo{
        ID:      "123456789",
        Email:   "user@example.com",
        Name:    "John Doe",
        Picture: "https://example.com/photo.jpg",
    }
}

func main() {
    fmt.Println("=== OAuth2 Flow Demo ===")
    fmt.Println()

    // Configure OAuth2 (like Google)
    config := &OAuthConfig{
        ClientID:     "your-client-id.apps.googleusercontent.com",
        ClientSecret: "your-client-secret",
        AuthURL:      "https://accounts.google.com/o/oauth2/v2/auth",
        TokenURL:     "https://oauth2.googleapis.com/token",
        RedirectURL:  "http://localhost:8080/auth/callback",
        Scopes:       []string{"email", "profile"},
    }

    // Step 1: Generate state for CSRF protection
    state := generateState()
    fmt.Println("1. Generate State (CSRF Protection):")
    fmt.Printf("   State: %s\\n", state)
    fmt.Println()

    // Step 2: Build authorization URL
    authURL := config.BuildAuthURL(state)
    fmt.Println("2. Redirect User to Auth URL:")
    fmt.Printf("   %s...\\n", authURL[:80])
    fmt.Println()

    // Step 3: User authorizes, provider redirects with code
    simulatedCode := "4/0AX4XfWh..." + generateState()[:8]
    fmt.Println("3. Provider Redirects Back with Code:")
    fmt.Printf("   Code: %s...\\n", simulatedCode[:20])
    fmt.Println()

    // Step 4: Exchange code for tokens
    fmt.Println("4. Exchange Code for Tokens:")
    token := config.SimulateTokenExchange(simulatedCode)
    tokenJSON, _ := json.MarshalIndent(token, "   ", "  ")
    fmt.Println("   " + string(tokenJSON))
    fmt.Println()

    // Step 5: Fetch user info
    fmt.Println("5. Fetch User Info with Access Token:")
    userInfo := SimulateUserInfo(token.AccessToken)
    userJSON, _ := json.MarshalIndent(userInfo, "   ", "  ")
    fmt.Println("   " + string(userJSON))
    fmt.Println()

    // Step 6: Create session
    fmt.Println("6. Create User Session:")
    fmt.Printf("   User %s authenticated successfully!\\n", userInfo.Email)
    fmt.Printf("   Session expires: %s\\n", time.Now().Add(24*time.Hour).Format(time.RFC3339))
}`,
    keyPoints: [
      "OAuth2 delegates authentication to trusted providers",
      "Always validate the state parameter",
      "Exchange authorization code for tokens server-side",
      "Store refresh tokens securely",
      "Handle token expiration gracefully",
    ],
    commonMistakes: [
      "Not validating state (CSRF vulnerability)",
      "Exposing client secret",
      "Not handling token refresh",
      "Trusting user info without verification",
    ],
    bestPractices: [
      "Use PKCE for mobile/SPA apps",
      "Store tokens encrypted",
      "Implement proper logout",
      "Support multiple OAuth providers",
    ],
  },

  mongodb: {
    content: `
# MongoDB with Go

Work with MongoDB using the official Go driver.

## Installation

\`\`\`bash
go get go.mongodb.org/mongo-driver/mongo
\`\`\`

## Connection

\`\`\`go
client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
defer client.Disconnect(ctx)

collection := client.Database("mydb").Collection("users")
\`\`\`

## CRUD Operations

\`\`\`go
// Insert
result, _ := collection.InsertOne(ctx, bson.M{"name": "Alice"})

// Find
var user User
collection.FindOne(ctx, bson.M{"_id": id}).Decode(&user)

// Update
collection.UpdateOne(ctx, bson.M{"_id": id}, bson.M{"$set": bson.M{"name": "Bob"}})

// Delete
collection.DeleteOne(ctx, bson.M{"_id": id})
\`\`\`
    `,
    code: `package main

import (
    "encoding/json"
    "fmt"
    "sync"
    "time"
)

// Simulating MongoDB operations with in-memory storage
// In real code, you'd use go.mongodb.org/mongo-driver/mongo

// Document represents a MongoDB-like document
type Document map[string]interface{}

// Collection simulates a MongoDB collection
type Collection struct {
    name      string
    documents []Document
    mu        sync.RWMutex
    nextID    int
}

func NewCollection(name string) *Collection {
    return &Collection{name: name, nextID: 1}
}

// InsertOne adds a document
func (c *Collection) InsertOne(doc Document) string {
    c.mu.Lock()
    defer c.mu.Unlock()
    id := fmt.Sprintf("ObjectId(%d)", c.nextID)
    doc["_id"] = id
    doc["createdAt"] = time.Now()
    c.documents = append(c.documents, doc)
    c.nextID++
    return id
}

// FindOne finds a document by filter
func (c *Collection) FindOne(filter Document) (Document, bool) {
    c.mu.RLock()
    defer c.mu.RUnlock()
    for _, doc := range c.documents {
        if matchFilter(doc, filter) {
            return doc, true
        }
    }
    return nil, false
}

// Find returns all matching documents
func (c *Collection) Find(filter Document) []Document {
    c.mu.RLock()
    defer c.mu.RUnlock()
    var results []Document
    for _, doc := range c.documents {
        if matchFilter(doc, filter) {
            results = append(results, doc)
        }
    }
    return results
}

// UpdateOne updates a document
func (c *Collection) UpdateOne(filter, update Document) bool {
    c.mu.Lock()
    defer c.mu.Unlock()
    for i, doc := range c.documents {
        if matchFilter(doc, filter) {
            for k, v := range update {
                c.documents[i][k] = v
            }
            c.documents[i]["updatedAt"] = time.Now()
            return true
        }
    }
    return false
}

// DeleteOne removes a document
func (c *Collection) DeleteOne(filter Document) bool {
    c.mu.Lock()
    defer c.mu.Unlock()
    for i, doc := range c.documents {
        if matchFilter(doc, filter) {
            c.documents = append(c.documents[:i], c.documents[i+1:]...)
            return true
        }
    }
    return false
}

func matchFilter(doc, filter Document) bool {
    for k, v := range filter {
        if doc[k] != v {
            return false
        }
    }
    return true
}

func main() {
    fmt.Println("=== MongoDB CRUD Operations Demo ===")
    fmt.Println()

    // Create collection
    posts := NewCollection("posts")

    // INSERT - Create documents
    fmt.Println("1. INSERT Operations:")
    id1 := posts.InsertOne(Document{
        "title":   "Getting Started with Go",
        "author":  "alice",
        "tags":    []string{"go", "tutorial"},
        "views":   0,
    })
    fmt.Printf("   Inserted: %s\\n", id1)

    id2 := posts.InsertOne(Document{
        "title":   "MongoDB Best Practices",
        "author":  "bob",
        "tags":    []string{"mongodb", "database"},
        "views":   42,
    })
    fmt.Printf("   Inserted: %s\\n", id2)
    fmt.Println()

    // FIND - Query documents
    fmt.Println("2. FIND Operations:")
    if doc, found := posts.FindOne(Document{"author": "alice"}); found {
        data, _ := json.MarshalIndent(doc, "   ", "  ")
        fmt.Println("   Found:", string(data))
    }
    fmt.Println()

    // UPDATE - Modify document
    fmt.Println("3. UPDATE Operation:")
    posts.UpdateOne(
        Document{"author": "alice"},
        Document{"views": 100, "featured": true},
    )
    if doc, found := posts.FindOne(Document{"author": "alice"}); found {
        fmt.Printf("   Updated views: %v, featured: %v\\n", doc["views"], doc["featured"])
    }
    fmt.Println()

    // FIND ALL
    fmt.Println("4. FIND ALL Documents:")
    allDocs := posts.Find(Document{})
    for i, doc := range allDocs {
        fmt.Printf("   [%d] %s by %s\\n", i+1, doc["title"], doc["author"])
    }
    fmt.Println()

    // DELETE
    fmt.Println("5. DELETE Operation:")
    deleted := posts.DeleteOne(Document{"author": "bob"})
    fmt.Printf("   Deleted: %v\\n", deleted)
    fmt.Printf("   Remaining documents: %d\\n", len(posts.Find(Document{})))
}`,
    keyPoints: [
      "Use bson.M for dynamic documents",
      "Define structs with bson tags for typed access",
      "Always use context for operations",
      "Close cursors after use",
      "Use aggregation for complex queries",
    ],
    commonMistakes: [
      "Not closing cursors",
      "Ignoring context cancellation",
      "Not creating indexes",
      "Storing ObjectID as string",
    ],
    bestPractices: [
      "Create indexes for query patterns",
      "Use connection pooling",
      "Implement retry logic",
      "Use transactions for multi-document operations",
    ],
  },

  redis: {
    content: `
# Redis Caching

Implement caching with Redis in Go.

## Installation

\`\`\`bash
go get github.com/go-redis/redis/v8
\`\`\`

## Connection

\`\`\`go
rdb := redis.NewClient(&redis.Options{
    Addr:     "localhost:6379",
    Password: "",
    DB:       0,
})
\`\`\`

## Common Operations

\`\`\`go
// Set with expiration
rdb.Set(ctx, "key", "value", time.Hour)

// Get
val, err := rdb.Get(ctx, "key").Result()

// Delete
rdb.Del(ctx, "key")

// Hash operations
rdb.HSet(ctx, "user:1", "name", "Alice", "email", "alice@example.com")
rdb.HGetAll(ctx, "user:1")
\`\`\`
    `,
    code: `package main

import (
    "encoding/json"
    "fmt"
    "sync"
    "time"
)

// Simulating Redis with in-memory storage
// In real code, use github.com/go-redis/redis/v8

type RedisValue struct {
    data      string
    expiresAt time.Time
}

type RedisClient struct {
    store map[string]RedisValue
    mu    sync.RWMutex
}

func NewRedisClient() *RedisClient {
    return &RedisClient{store: make(map[string]RedisValue)}
}

// SET with optional expiration
func (r *RedisClient) Set(key, value string, ttl time.Duration) {
    r.mu.Lock()
    defer r.mu.Unlock()
    r.store[key] = RedisValue{
        data:      value,
        expiresAt: time.Now().Add(ttl),
    }
}

// GET returns value or empty string
func (r *RedisClient) Get(key string) (string, bool) {
    r.mu.RLock()
    defer r.mu.RUnlock()
    if val, ok := r.store[key]; ok {
        if time.Now().Before(val.expiresAt) {
            return val.data, true
        }
    }
    return "", false
}

// DEL removes a key
func (r *RedisClient) Del(key string) {
    r.mu.Lock()
    defer r.mu.Unlock()
    delete(r.store, key)
}

// INCR increments a counter
func (r *RedisClient) Incr(key string) int {
    r.mu.Lock()
    defer r.mu.Unlock()
    var count int
    if val, ok := r.store[key]; ok {
        fmt.Sscanf(val.data, "%d", &count)
    }
    count++
    r.store[key] = RedisValue{
        data:      fmt.Sprintf("%d", count),
        expiresAt: time.Now().Add(time.Hour),
    }
    return count
}

// User for caching example
type User struct {
    ID    int    \`json:"id"\`
    Name  string \`json:"name"\`
    Email string \`json:"email"\`
}

// Simulated database
var userDB = map[int]User{
    1: {ID: 1, Name: "Alice", Email: "alice@example.com"},
    2: {ID: 2, Name: "Bob", Email: "bob@example.com"},
}

func main() {
    redis := NewRedisClient()

    fmt.Println("=== Redis Caching Demo ===")
    fmt.Println()

    // 1. Basic SET/GET operations
    fmt.Println("1. Basic String Operations:")
    redis.Set("greeting", "Hello, Redis!", time.Minute)
    if val, ok := redis.Get("greeting"); ok {
        fmt.Printf("   GET greeting: %s\\n", val)
    }
    fmt.Println()

    // 2. Cache-Aside Pattern
    fmt.Println("2. Cache-Aside Pattern:")
    userID := 1
    cacheKey := fmt.Sprintf("user:%d", userID)

    // Try cache first
    if cached, ok := redis.Get(cacheKey); ok {
        fmt.Println("   Cache HIT!")
        fmt.Printf("   Cached: %s\\n", cached)
    } else {
        fmt.Println("   Cache MISS - fetching from DB...")
        user := userDB[userID]
        data, _ := json.Marshal(user)
        redis.Set(cacheKey, string(data), 5*time.Minute)
        fmt.Printf("   Fetched and cached: %s\\n", string(data))
    }

    // Second request - should hit cache
    if cached, ok := redis.Get(cacheKey); ok {
        fmt.Println("   Second request: Cache HIT!")
        var user User
        json.Unmarshal([]byte(cached), &user)
        fmt.Printf("   User: %s <%s>\\n", user.Name, user.Email)
    }
    fmt.Println()

    // 3. Rate Limiting
    fmt.Println("3. Rate Limiting (5 requests/minute):")
    rateLimitKey := "ratelimit:user:1"
    for i := 1; i <= 7; i++ {
        count := redis.Incr(rateLimitKey)
        if count <= 5 {
            fmt.Printf("   Request %d: ALLOWED (count: %d)\\n", i, count)
        } else {
            fmt.Printf("   Request %d: BLOCKED (count: %d)\\n", i, count)
        }
    }
    fmt.Println()

    // 4. Cache Invalidation
    fmt.Println("4. Cache Invalidation:")
    fmt.Printf("   Before: key exists = %v\\n", func() bool { _, ok := redis.Get(cacheKey); return ok }())
    redis.Del(cacheKey)
    fmt.Printf("   After DEL: key exists = %v\\n", func() bool { _, ok := redis.Get(cacheKey); return ok }())
}`,
    keyPoints: [
      "Redis is an in-memory data store",
      "Use for caching, sessions, rate limiting",
      "Set appropriate TTL for cached data",
      "Implement cache invalidation strategy",
      "Handle cache misses gracefully",
    ],
    commonMistakes: [
      "Not setting expiration on keys",
      "Caching too much data",
      "Not handling Redis connection failures",
      "Inconsistent cache invalidation",
    ],
    bestPractices: [
      "Use connection pooling",
      "Implement circuit breaker for Redis",
      "Use pipelines for multiple operations",
      "Monitor memory usage",
    ],
  },

  "docker-basics": {
    content: `
# Docker Basics

Containerize Go applications with Docker.

## Why Docker?

- Consistent environments
- Easy deployment
- Isolation
- Scalability

## Basic Dockerfile

\`\`\`dockerfile
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o main .

FROM alpine:latest
COPY --from=builder /app/main /main
EXPOSE 8080
CMD ["/main"]
\`\`\`

## Docker Commands

\`\`\`bash
docker build -t myapp .
docker run -p 8080:8080 myapp
docker ps
docker logs <container_id>
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "net/http"
    "os"
    "os/signal"
    "syscall"
    "time"
)

// This is a Docker-ready Go application
// It demonstrates best practices for containerization

func main() {
    // Get port from environment (Docker best practice)
    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }

    // Get environment name
    env := os.Getenv("ENVIRONMENT")
    if env == "" {
        env = "development"
    }

    fmt.Printf("=== Docker-Ready Go Application ===\\n")
    fmt.Printf("Environment: %s\\n", env)
    fmt.Printf("Starting server on port %s...\\n\\n", port)

    // Create HTTP server
    mux := http.NewServeMux()

    // Health check endpoint (required for container orchestration)
    mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
        w.WriteHeader(http.StatusOK)
        fmt.Fprintf(w, \`{"status":"healthy","time":"%s"}\`, time.Now().Format(time.RFC3339))
    })

    // Readiness check (for Kubernetes)
    mux.HandleFunc("/ready", func(w http.ResponseWriter, r *http.Request) {
        w.WriteHeader(http.StatusOK)
        fmt.Fprintf(w, \`{"ready":true}\`)
    })

    // Main endpoint
    mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        hostname, _ := os.Hostname()
        fmt.Fprintf(w, \`{"message":"Hello from Docker!","hostname":"%s","env":"%s"}\`, hostname, env)
    })

    // Graceful shutdown handling (important for containers)
    server := &http.Server{
        Addr:    ":" + port,
        Handler: mux,
    }

    // Handle shutdown signals
    done := make(chan bool)
    quit := make(chan os.Signal, 1)
    signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)

    go func() {
        <-quit
        fmt.Println("\\nShutting down gracefully...")
        server.Close()
        done <- true
    }()

    // Simulate server running (in real app, use server.ListenAndServe())
    fmt.Println("Server endpoints:")
    fmt.Printf("  GET /        - Main endpoint\\n")
    fmt.Printf("  GET /health  - Health check\\n")
    fmt.Printf("  GET /ready   - Readiness check\\n")
    fmt.Println()

    // Demo: Simulate some requests
    fmt.Println("Simulating requests:")
    fmt.Printf("  /health -> {status: healthy}\\n")
    fmt.Printf("  /ready  -> {ready: true}\\n")
    fmt.Printf("  /       -> {message: Hello from Docker!}\\n")
    fmt.Println()

    fmt.Println("Container best practices demonstrated:")
    fmt.Println("  ✓ Environment variable configuration")
    fmt.Println("  ✓ Health check endpoint")
    fmt.Println("  ✓ Readiness probe endpoint")
    fmt.Println("  ✓ Graceful shutdown handling")
    fmt.Println("  ✓ Signal handling (SIGTERM/SIGINT)")
}`,
    keyPoints: [
      "Use multi-stage builds for small images",
      "Alpine base images are smaller",
      "CGO_ENABLED=0 for static binaries",
      "Copy only necessary files",
      "Use .dockerignore to exclude files",
    ],
    commonMistakes: [
      "Not using multi-stage builds",
      "Including unnecessary files",
      "Running as root",
      "Not handling signals properly",
    ],
    bestPractices: [
      "Use specific version tags",
      "Run as non-root user",
      "Add health checks",
      "Use build cache effectively",
    ],
  },

  dockerfile: {
    content: `
# Advanced Dockerfile Patterns

Optimize Docker images for production Go applications.

## Production Dockerfile

\`\`\`dockerfile
FROM golang:1.21-alpine AS builder
RUN apk add --no-cache git ca-certificates
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /app/main .

FROM scratch
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /app/main /main
USER 1000
EXPOSE 8080
ENTRYPOINT ["/main"]
\`\`\`

## Build Arguments

\`\`\`dockerfile
ARG VERSION=dev
RUN go build -ldflags="-X main.version=\${VERSION}" -o main .
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "runtime"
    "runtime/debug"
)

// Version info - set at build time with ldflags
// go build -ldflags="-X main.version=1.0.0 -X main.buildTime=2024-01-01"
var (
    version   = "dev"
    buildTime = "unknown"
    gitCommit = "unknown"
)

func main() {
    fmt.Println("=== Advanced Docker Build Demo ===")
    fmt.Println()

    // Display build information
    fmt.Println("1. Build Information (via ldflags):")
    fmt.Printf("   Version:    %s\\n", version)
    fmt.Printf("   Build Time: %s\\n", buildTime)
    fmt.Printf("   Git Commit: %s\\n", gitCommit)
    fmt.Println()

    // Runtime information
    fmt.Println("2. Runtime Information:")
    fmt.Printf("   Go Version: %s\\n", runtime.Version())
    fmt.Printf("   OS/Arch:    %s/%s\\n", runtime.GOOS, runtime.GOARCH)
    fmt.Printf("   CPUs:       %d\\n", runtime.NumCPU())
    fmt.Println()

    // Memory stats (useful for container limits)
    var m runtime.MemStats
    runtime.ReadMemStats(&m)
    fmt.Println("3. Memory Stats (for container sizing):")
    fmt.Printf("   Alloc:      %d KB\\n", m.Alloc/1024)
    fmt.Printf("   Sys:        %d KB\\n", m.Sys/1024)
    fmt.Printf("   NumGC:      %d\\n", m.NumGC)
    fmt.Println()

    // Build info from debug package
    fmt.Println("4. Module Information:")
    if info, ok := debug.ReadBuildInfo(); ok {
        fmt.Printf("   Main:    %s\\n", info.Main.Path)
        fmt.Printf("   Go:      %s\\n", info.GoVersion)
        for _, setting := range info.Settings {
            if setting.Key == "CGO_ENABLED" || setting.Key == "GOOS" || setting.Key == "GOARCH" {
                fmt.Printf("   %s: %s\\n", setting.Key, setting.Value)
            }
        }
    }
    fmt.Println()

    // Binary optimization tips
    fmt.Println("5. Docker Optimization Tips:")
    fmt.Println("   Build command:")
    fmt.Println("   CGO_ENABLED=0 go build -ldflags='-s -w' -o app")
    fmt.Println()
    fmt.Println("   Flags explained:")
    fmt.Println("   -s: Strip symbol table (smaller binary)")
    fmt.Println("   -w: Strip DWARF debug info")
    fmt.Println("   CGO_ENABLED=0: Static binary for scratch image")
    fmt.Println()

    // Demonstrate signal handling importance
    fmt.Println("6. Container Best Practices:")
    fmt.Println("   ✓ Run as non-root user (USER 1000)")
    fmt.Println("   ✓ Use scratch or distroless base")
    fmt.Println("   ✓ Include CA certs for HTTPS")
    fmt.Println("   ✓ Set timezone data if needed")
    fmt.Println("   ✓ Handle SIGTERM for graceful shutdown")
}`,
    keyPoints: [
      "Use scratch for minimal images",
      "Include CA certificates for HTTPS",
      "Use -ldflags for smaller binaries",
      "Run as non-root user",
      "Include timezone data if needed",
    ],
    commonMistakes: [
      "Missing CA certificates",
      "Not setting timezone",
      "Running as root",
      "Large image sizes",
    ],
    bestPractices: [
      "Use scratch or distroless base",
      "Scan images for vulnerabilities",
      "Tag images with git SHA",
      "Use BuildKit for faster builds",
    ],
  },

  "docker-compose": {
    content: `
# Docker Compose

Orchestrate multi-container applications.

## docker-compose.yml

\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
    depends_on:
      - db
      - redis

  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=secret

  redis:
    image: redis:7-alpine

volumes:
  postgres_data:
\`\`\`

## Commands

\`\`\`bash
docker-compose up -d
docker-compose logs -f
docker-compose down
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "os"
    "time"
)

// Multi-Service Application Demo
// Demonstrates how services communicate in Docker Compose

// Service represents a running service
type Service struct {
    Name   string
    Port   int
    Status string
}

// ServiceRegistry tracks all services
type ServiceRegistry struct {
    services map[string]*Service
}

func NewServiceRegistry() *ServiceRegistry {
    return &ServiceRegistry{services: make(map[string]*Service)}
}

func (r *ServiceRegistry) Register(name string, port int) {
    r.services[name] = &Service{
        Name:   name,
        Port:   port,
        Status: "healthy",
    }
}

func (r *ServiceRegistry) GetService(name string) (*Service, bool) {
    s, ok := r.services[name]
    return s, ok
}

func (r *ServiceRegistry) HealthCheck() map[string]string {
    status := make(map[string]string)
    for name, svc := range r.services {
        status[name] = svc.Status
    }
    return status
}

func main() {
    fmt.Println("=== Docker Compose Multi-Service Demo ===")
    fmt.Println()

    // Simulate reading environment variables (set by docker-compose)
    dbURL := os.Getenv("DATABASE_URL")
    if dbURL == "" {
        dbURL = "postgres://user:pass@db:5432/app" // default
    }
    redisURL := os.Getenv("REDIS_URL")
    if redisURL == "" {
        redisURL = "redis://redis:6379"
    }

    fmt.Println("1. Environment Configuration:")
    fmt.Printf("   DATABASE_URL: %s\\n", dbURL)
    fmt.Printf("   REDIS_URL:    %s\\n", redisURL)
    fmt.Println()

    // Simulate service discovery
    registry := NewServiceRegistry()
    fmt.Println("2. Service Registration:")

    registry.Register("api", 8080)
    fmt.Println("   ✓ Registered: api:8080")

    registry.Register("db", 5432)
    fmt.Println("   ✓ Registered: db:5432")

    registry.Register("redis", 6379)
    fmt.Println("   ✓ Registered: redis:6379")
    fmt.Println()

    // Simulate service dependency checks
    fmt.Println("3. Dependency Check (depends_on):")
    dependencies := []string{"db", "redis"}
    for _, dep := range dependencies {
        if svc, ok := registry.GetService(dep); ok {
            fmt.Printf("   ✓ %s is %s\\n", svc.Name, svc.Status)
        }
    }
    fmt.Println()

    // Simulate health checks
    fmt.Println("4. Health Check Status:")
    status := registry.HealthCheck()
    for name, health := range status {
        fmt.Printf("   %s: %s\\n", name, health)
    }
    fmt.Println()

    // Simulate inter-service communication
    fmt.Println("5. Inter-Service Communication:")
    start := time.Now()

    // API -> Database
    fmt.Println("   api -> db: SELECT * FROM users")
    time.Sleep(5 * time.Millisecond)
    fmt.Println("   api <- db: [{id:1, name:'Alice'}]")

    // API -> Redis
    fmt.Println("   api -> redis: GET session:abc123")
    time.Sleep(1 * time.Millisecond)
    fmt.Println("   api <- redis: {user_id: 1}")

    fmt.Printf("   Total time: %v\\n", time.Since(start))
}`,
    keyPoints: [
      "Define all services in one file",
      "Use depends_on for startup order",
      "Health checks ensure service readiness",
      "Volumes persist data",
      "Networks isolate services",
    ],
    commonMistakes: [
      "Not using health checks",
      "Hardcoding secrets",
      "Missing volume mounts",
      "Wrong network configuration",
    ],
    bestPractices: [
      "Use .env files for configuration",
      "Implement health checks",
      "Use named volumes",
      "Separate dev and prod configs",
    ],
  },

  kubernetes: {
    content: `
# Kubernetes Basics

Deploy Go applications to Kubernetes.

## Key Concepts

- **Pod**: Smallest deployable unit
- **Deployment**: Manages pod replicas
- **Service**: Exposes pods to network
- **ConfigMap/Secret**: Configuration

## Deployment YAML

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 8080
\`\`\`
    `,
    code: `package main

import (
    "encoding/json"
    "fmt"
    "math/rand"
    "os"
    "time"
)

// Kubernetes-aware Go application demo
// Shows concepts: pods, services, health checks, config

// Pod represents a Kubernetes pod
type Pod struct {
    Name      string            \`json:"name"\`
    Namespace string            \`json:"namespace"\`
    Labels    map[string]string \`json:"labels"\`
    Status    string            \`json:"status"\`
    IP        string            \`json:"ip"\`
    Ready     bool              \`json:"ready"\`
}

// Service represents a Kubernetes service
type Service struct {
    Name      string   \`json:"name"\`
    ClusterIP string   \`json:"clusterIP"\`
    Ports     []int    \`json:"ports"\`
    Endpoints []string \`json:"endpoints"\`
}

// Deployment simulates K8s deployment behavior
type Deployment struct {
    Name     string
    Replicas int
    Pods     []*Pod
}

func (d *Deployment) Scale(replicas int) {
    for len(d.Pods) < replicas {
        pod := &Pod{
            Name:      fmt.Sprintf("%s-%s", d.Name, randomID()),
            Namespace: "default",
            Labels:    map[string]string{"app": d.Name},
            Status:    "Running",
            IP:        fmt.Sprintf("10.0.0.%d", rand.Intn(255)),
            Ready:     true,
        }
        d.Pods = append(d.Pods, pod)
    }
    d.Replicas = replicas
}

func randomID() string {
    chars := "abcdefghijklmnopqrstuvwxyz0123456789"
    b := make([]byte, 5)
    for i := range b {
        b[i] = chars[rand.Intn(len(chars))]
    }
    return string(b)
}

func main() {
    rand.Seed(time.Now().UnixNano())

    fmt.Println("=== Kubernetes Concepts Demo ===")
    fmt.Println()

    // Read config from environment (ConfigMap/Secret in K8s)
    fmt.Println("1. Configuration (from ConfigMap/Secret):")
    dbHost := os.Getenv("DB_HOST")
    if dbHost == "" {
        dbHost = "postgres-service" // K8s service name
    }
    fmt.Printf("   DB_HOST: %s\\n", dbHost)
    fmt.Println()

    // Simulate deployment
    fmt.Println("2. Deployment (replicas: 3):")
    deploy := &Deployment{Name: "go-api"}
    deploy.Scale(3)
    for _, pod := range deploy.Pods {
        fmt.Printf("   Pod: %s | IP: %s | Status: %s\\n",
            pod.Name, pod.IP, pod.Status)
    }
    fmt.Println()

    // Simulate service load balancing
    fmt.Println("3. Service Load Balancing:")
    service := &Service{
        Name:      "go-api-service",
        ClusterIP: "10.96.0.100",
        Ports:     []int{80},
    }
    for _, pod := range deploy.Pods {
        service.Endpoints = append(service.Endpoints, pod.IP+":8080")
    }
    fmt.Printf("   Service: %s\\n", service.Name)
    fmt.Printf("   ClusterIP: %s:80\\n", service.ClusterIP)
    fmt.Printf("   Endpoints: %v\\n", service.Endpoints)
    fmt.Println()

    // Health checks
    fmt.Println("4. Health Probes:")
    for _, pod := range deploy.Pods {
        fmt.Printf("   %s - Liveness: ✓  Readiness: ✓\\n", pod.Name)
    }
    fmt.Println()

    // Pod info as JSON
    fmt.Println("5. Pod Status (JSON):")
    podJSON, _ := json.MarshalIndent(deploy.Pods[0], "   ", "  ")
    fmt.Println("   " + string(podJSON))
}`,
    keyPoints: [
      "Deployments manage pod lifecycle",
      "Services provide stable networking",
      "Use liveness and readiness probes",
      "Set resource limits",
      "Use ConfigMaps for configuration",
    ],
    commonMistakes: [
      "No resource limits",
      "Missing health probes",
      "Using latest tag",
      "Not handling graceful shutdown",
    ],
    bestPractices: [
      "Use specific image tags",
      "Implement proper health checks",
      "Set resource requests and limits",
      "Use namespaces for isolation",
    ],
  },

  cicd: {
    content: `
# CI/CD Pipelines

Automate testing and deployment with CI/CD.

## GitHub Actions

\`\`\`yaml
name: CI/CD
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-go@v4
        with:
          go-version: '1.21'
      - run: go test ./...

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: docker build -t myapp .
      - run: docker push myapp
\`\`\`

## Pipeline Stages

1. **Build**: Compile and create artifacts
2. **Test**: Run unit and integration tests
3. **Deploy**: Push to staging/production
    `,
    code: `package main

import (
    "fmt"
    "time"
)

// CI/CD Pipeline Simulation
// Demonstrates pipeline stages and concepts

type PipelineStage struct {
    Name     string
    Status   string
    Duration time.Duration
}

type Pipeline struct {
    Name      string
    Commit    string
    Branch    string
    Stages    []PipelineStage
    StartTime time.Time
}

func (p *Pipeline) Run() {
    p.StartTime = time.Now()
    fmt.Printf("Pipeline: %s\\n", p.Name)
    fmt.Printf("Commit:   %s\\n", p.Commit)
    fmt.Printf("Branch:   %s\\n", p.Branch)
    fmt.Println()

    for i := range p.Stages {
        stage := &p.Stages[i]
        fmt.Printf("▶ Stage: %s\\n", stage.Name)

        // Simulate stage execution
        time.Sleep(50 * time.Millisecond)
        stage.Duration = 50 * time.Millisecond
        stage.Status = "✓ passed"

        fmt.Printf("  Status: %s (%v)\\n", stage.Status, stage.Duration)
    }
}

func (p *Pipeline) Summary() {
    fmt.Println()
    fmt.Println("=== Pipeline Summary ===")
    total := time.Duration(0)
    for _, stage := range p.Stages {
        total += stage.Duration
        fmt.Printf("  %s: %s\\n", stage.Name, stage.Status)
    }
    fmt.Printf("\\nTotal Duration: %v\\n", total)
}

func main() {
    fmt.Println("=== CI/CD Pipeline Demo ===")
    fmt.Println()

    // Create pipeline
    pipeline := &Pipeline{
        Name:   "go-api-pipeline",
        Commit: "abc123f",
        Branch: "main",
        Stages: []PipelineStage{
            {Name: "checkout"},
            {Name: "setup-go"},
            {Name: "lint"},
            {Name: "test"},
            {Name: "build"},
            {Name: "docker-build"},
            {Name: "docker-push"},
            {Name: "deploy-staging"},
        },
    }

    // Run pipeline
    pipeline.Run()
    pipeline.Summary()

    fmt.Println()
    fmt.Println("=== Pipeline Concepts ===")
    fmt.Println()

    // Demonstrate parallel jobs
    fmt.Println("1. Parallel Jobs:")
    fmt.Println("   lint ──┐")
    fmt.Println("   test ──┼── build ── deploy")
    fmt.Println("   scan ──┘")
    fmt.Println()

    // Demonstrate environments
    fmt.Println("2. Deployment Environments:")
    envs := []struct{ name, status string }{
        {"development", "auto-deploy on push"},
        {"staging", "auto-deploy on main"},
        {"production", "manual approval required"},
    }
    for _, env := range envs {
        fmt.Printf("   %s: %s\\n", env.name, env.status)
    }
    fmt.Println()

    // Demonstrate artifacts
    fmt.Println("3. Build Artifacts:")
    fmt.Println("   - go-api-linux-amd64")
    fmt.Println("   - go-api-darwin-arm64")
    fmt.Println("   - docker image: myapp:abc123f")
    fmt.Println("   - coverage.html")
}`,
    keyPoints: [
      "Automate testing on every push",
      "Use caching for faster builds",
      "Run tests in parallel",
      "Deploy only after tests pass",
      "Use environment-specific configs",
    ],
    commonMistakes: [
      "Not running tests before deploy",
      "Missing environment variables",
      "No rollback strategy",
      "Deploying directly to production",
    ],
    bestPractices: [
      "Use branch protection rules",
      "Implement staging environment",
      "Add manual approval for production",
      "Monitor deployments",
    ],
  },

  "api-security": {
    content: `
# API Security Best Practices

Secure your Go APIs against common vulnerabilities.

## Security Headers

\`\`\`go
func SecurityHeaders() gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Header("X-Content-Type-Options", "nosniff")
        c.Header("X-Frame-Options", "DENY")
        c.Header("X-XSS-Protection", "1; mode=block")
        c.Header("Content-Security-Policy", "default-src 'self'")
        c.Next()
    }
}
\`\`\`

## Input Validation

Always validate and sanitize user input:

\`\`\`go
type CreateUserInput struct {
    Email    string \`json:"email" binding:"required,email"\`
    Password string \`json:"password" binding:"required,min=8"\`
}
\`\`\`

## OWASP Top 10

- Injection
- Broken Authentication
- Sensitive Data Exposure
- XML External Entities
- Broken Access Control
    `,
    code: `package main

import (
    "crypto/rand"
    "encoding/hex"
    "fmt"
    "regexp"
    "strings"
    "unicode"
)

// Input Validator for API security
type Validator struct {
    errors []string
}

func (v *Validator) ValidateEmail(email string) bool {
    pattern := \`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\`
    matched, _ := regexp.MatchString(pattern, email)
    if !matched {
        v.errors = append(v.errors, "Invalid email format")
    }
    return matched
}

func (v *Validator) ValidatePassword(password string) bool {
    var hasUpper, hasLower, hasNumber, hasSpecial bool
    for _, c := range password {
        switch {
        case unicode.IsUpper(c): hasUpper = true
        case unicode.IsLower(c): hasLower = true
        case unicode.IsDigit(c): hasNumber = true
        case unicode.IsPunct(c) || unicode.IsSymbol(c): hasSpecial = true
        }
    }
    valid := len(password) >= 8 && hasUpper && hasLower && hasNumber && hasSpecial
    if !valid {
        v.errors = append(v.errors, "Password must be 8+ chars with upper, lower, number, special")
    }
    return valid
}

func (v *Validator) SanitizeInput(input string) string {
    // Remove potential XSS
    dangerous := []string{"<script>", "</script>", "javascript:", "onerror="}
    result := input
    for _, d := range dangerous {
        result = strings.ReplaceAll(strings.ToLower(result), d, "")
    }
    return strings.TrimSpace(result)
}

// Generate secure random token
func GenerateSecureToken(length int) string {
    bytes := make([]byte, length)
    rand.Read(bytes)
    return hex.EncodeToString(bytes)
}

// Security headers
type SecurityHeaders struct {
    ContentTypeOptions    string
    FrameOptions          string
    XSSProtection         string
    StrictTransport       string
    ContentSecurityPolicy string
}

func GetSecurityHeaders() SecurityHeaders {
    return SecurityHeaders{
        ContentTypeOptions:    "nosniff",
        FrameOptions:          "DENY",
        XSSProtection:         "1; mode=block",
        StrictTransport:       "max-age=31536000; includeSubDomains",
        ContentSecurityPolicy: "default-src 'self'",
    }
}

func main() {
    fmt.Println("=== API Security Demo ===")
    fmt.Println()

    v := &Validator{}

    // 1. Email validation
    fmt.Println("1. Email Validation:")
    emails := []string{"user@example.com", "invalid-email", "test@domain.co.uk"}
    for _, email := range emails {
        valid := v.ValidateEmail(email)
        status := "✓"
        if !valid { status = "✗" }
        fmt.Printf("   %s %s\\n", status, email)
    }
    v.errors = nil
    fmt.Println()

    // 2. Password validation
    fmt.Println("2. Password Validation:")
    passwords := []string{"weak", "StrongP@ss1", "NoSpecial1"}
    for _, pwd := range passwords {
        valid := v.ValidatePassword(pwd)
        status := "✓"
        if !valid { status = "✗" }
        fmt.Printf("   %s %s\\n", status, pwd)
        v.errors = nil
    }
    fmt.Println()

    // 3. Input sanitization
    fmt.Println("3. Input Sanitization (XSS Prevention):")
    malicious := "<script>alert('xss')</script>Hello"
    sanitized := v.SanitizeInput(malicious)
    fmt.Printf("   Input:     %s\\n", malicious)
    fmt.Printf("   Sanitized: %s\\n", sanitized)
    fmt.Println()

    // 4. Secure token generation
    fmt.Println("4. Secure Token Generation:")
    token := GenerateSecureToken(16)
    fmt.Printf("   CSRF Token: %s\\n", token)
    fmt.Println()

    // 5. Security headers
    fmt.Println("5. Security Headers:")
    headers := GetSecurityHeaders()
    fmt.Printf("   X-Content-Type-Options: %s\\n", headers.ContentTypeOptions)
    fmt.Printf("   X-Frame-Options: %s\\n", headers.FrameOptions)
    fmt.Printf("   Strict-Transport-Security: %s\\n", headers.StrictTransport)
}`,
    keyPoints: [
      "Always validate user input",
      "Use parameterized queries",
      "Set security headers",
      "Implement rate limiting",
      "Use HTTPS in production",
    ],
    commonMistakes: [
      "SQL injection vulnerabilities",
      "Storing plain text passwords",
      "Missing input validation",
      "Exposing sensitive data in errors",
    ],
    bestPractices: [
      "Follow OWASP guidelines",
      "Regular security audits",
      "Dependency vulnerability scanning",
      "Implement proper logging",
    ],
  },

  "rate-limiting": {
    content: `
# Rate Limiting

Protect your API from abuse with rate limiting.

## Token Bucket Algorithm

\`\`\`go
type RateLimiter struct {
    tokens     float64
    maxTokens  float64
    refillRate float64
    lastRefill time.Time
    mu         sync.Mutex
}
\`\`\`

## Using go-redis/redis_rate

\`\`\`go
limiter := redis_rate.NewLimiter(rdb)
res, err := limiter.Allow(ctx, key, redis_rate.PerMinute(100))
if res.Allowed == 0 {
    // Rate limited
}
\`\`\`

## Response Headers

\`\`\`
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1234567890
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "sync"
    "time"
)

type RateLimiter struct {
    requests map[string][]time.Time
    limit    int
    window   time.Duration
    mu       sync.Mutex
}

func NewRateLimiter(limit int, window time.Duration) *RateLimiter {
    return &RateLimiter{
        requests: make(map[string][]time.Time),
        limit:    limit,
        window:   window,
    }
}

func (rl *RateLimiter) Allow(key string) bool {
    rl.mu.Lock()
    defer rl.mu.Unlock()

    now := time.Now()
    windowStart := now.Add(-rl.window)

    // Filter old requests
    var valid []time.Time
    for _, t := range rl.requests[key] {
        if t.After(windowStart) {
            valid = append(valid, t)
        }
    }

    if len(valid) >= rl.limit {
        return false
    }

    rl.requests[key] = append(valid, now)
    return true
}

func main() {
    limiter := NewRateLimiter(5, time.Minute)

    fmt.Println("Rate Limiting Demo")
    fmt.Println("==================")
    fmt.Println("Limit: 5 requests per minute")
    fmt.Println("")

    for i := 1; i <= 7; i++ {
        allowed := limiter.Allow("user:123")
        status := "✓ Allowed"
        if !allowed {
            status = "✗ Rate Limited"
        }
        fmt.Printf("Request %d: %s\\n", i, status)
    }
}`,
    keyPoints: [
      "Rate limiting prevents API abuse",
      "Use Redis for distributed rate limiting",
      "Return rate limit headers",
      "Different limits for different endpoints",
      "Consider user tiers",
    ],
    commonMistakes: [
      "Rate limiting by IP only",
      "Not handling distributed systems",
      "Too strict limits",
      "No bypass for internal services",
    ],
    bestPractices: [
      "Use sliding window algorithm",
      "Implement graceful degradation",
      "Monitor rate limit hits",
      "Provide clear error messages",
    ],
  },

  performance: {
    content: `
# Performance Optimization

Optimize Go applications for maximum performance.

## Profiling

\`\`\`go
import _ "net/http/pprof"

go func() {
    http.ListenAndServe(":6060", nil)
}()
\`\`\`

## Common Optimizations

- Use sync.Pool for object reuse
- Preallocate slices with known capacity
- Use strings.Builder for concatenation
- Avoid unnecessary allocations

## Benchmarking

\`\`\`go
func BenchmarkMyFunction(b *testing.B) {
    for i := 0; i < b.N; i++ {
        MyFunction()
    }
}
\`\`\`

Run with: \`go test -bench=.\`
    `,
    code: `package main

import (
    "fmt"
    "strings"
    "time"
)

// Inefficient string concatenation
func concatSlow(n int) string {
    result := ""
    for i := 0; i < n; i++ {
        result += "x"
    }
    return result
}

// Efficient string concatenation
func concatFast(n int) string {
    var builder strings.Builder
    builder.Grow(n) // Preallocate
    for i := 0; i < n; i++ {
        builder.WriteByte('x')
    }
    return builder.String()
}

func benchmark(name string, f func(int) string, n int) time.Duration {
    start := time.Now()
    f(n)
    return time.Since(start)
}

func main() {
    fmt.Println("Performance Optimization Demo")
    fmt.Println("==============================")
    fmt.Println("")

    n := 10000

    slowTime := benchmark("Slow", concatSlow, n)
    fastTime := benchmark("Fast", concatFast, n)

    fmt.Printf("String concatenation (%d iterations):\\n", n)
    fmt.Printf("  Slow (+=):           %v\\n", slowTime)
    fmt.Printf("  Fast (Builder):      %v\\n", fastTime)
    fmt.Printf("  Speedup:             %.1fx\\n", float64(slowTime)/float64(fastTime))
    fmt.Println("")

    fmt.Println("Optimization Tips:")
    fmt.Println("  • Use strings.Builder for concatenation")
    fmt.Println("  • Preallocate slices: make([]T, 0, capacity)")
    fmt.Println("  • Use sync.Pool for frequently allocated objects")
    fmt.Println("  • Profile before optimizing")
    fmt.Println("  • Benchmark to verify improvements")
}`,
    keyPoints: [
      "Profile before optimizing",
      "Use pprof for CPU and memory profiling",
      "Benchmark to measure improvements",
      "Reduce allocations",
      "Use appropriate data structures",
    ],
    commonMistakes: [
      "Premature optimization",
      "Not profiling first",
      "Optimizing wrong bottleneck",
      "Sacrificing readability",
    ],
    bestPractices: [
      "Measure, don't guess",
      "Focus on hot paths",
      "Use sync.Pool for reuse",
      "Consider memory layout",
    ],
  },

  profiling: {
    content: `
# Profiling Go Applications

Use pprof to find performance bottlenecks.

## CPU Profiling

\`\`\`go
import "runtime/pprof"

f, _ := os.Create("cpu.prof")
pprof.StartCPUProfile(f)
defer pprof.StopCPUProfile()
\`\`\`

## Memory Profiling

\`\`\`go
f, _ := os.Create("mem.prof")
pprof.WriteHeapProfile(f)
\`\`\`

## HTTP pprof

\`\`\`go
import _ "net/http/pprof"
go http.ListenAndServe(":6060", nil)
\`\`\`

Access at: http://localhost:6060/debug/pprof/

## Analyze with go tool

\`\`\`bash
go tool pprof cpu.prof
(pprof) top
(pprof) web
\`\`\`
    `,
    code: `package main

import (
    "fmt"
    "runtime"
    "sort"
    "time"
)

// Simulated profiling data
type ProfileSample struct {
    Function string
    CPUTime  time.Duration
    Memory   int64
    Calls    int
}

// Profiler collects performance data
type Profiler struct {
    samples   []ProfileSample
    startTime time.Time
}

func NewProfiler() *Profiler {
    return &Profiler{startTime: time.Now()}
}

func (p *Profiler) Record(fn string, duration time.Duration, mem int64) {
    p.samples = append(p.samples, ProfileSample{
        Function: fn,
        CPUTime:  duration,
        Memory:   mem,
        Calls:    1,
    })
}

func (p *Profiler) TopByCPU(n int) []ProfileSample {
    sort.Slice(p.samples, func(i, j int) bool {
        return p.samples[i].CPUTime > p.samples[j].CPUTime
    })
    if n > len(p.samples) {
        n = len(p.samples)
    }
    return p.samples[:n]
}

// Simulate some work
func heavyComputation() {
    sum := 0
    for i := 0; i < 1000000; i++ {
        sum += i
    }
}

func lightComputation() {
    sum := 0
    for i := 0; i < 1000; i++ {
        sum += i
    }
}

func allocateMemory() []byte {
    return make([]byte, 1024*1024) // 1MB
}

func main() {
    fmt.Println("=== Go Profiling Demo ===")
    fmt.Println()

    profiler := NewProfiler()

    // Profile different functions
    fmt.Println("1. Profiling Functions:")

    start := time.Now()
    heavyComputation()
    profiler.Record("heavyComputation", time.Since(start), 0)
    fmt.Printf("   heavyComputation: %v\\n", time.Since(start))

    start = time.Now()
    lightComputation()
    profiler.Record("lightComputation", time.Since(start), 0)
    fmt.Printf("   lightComputation: %v\\n", time.Since(start))

    start = time.Now()
    data := allocateMemory()
    profiler.Record("allocateMemory", time.Since(start), int64(len(data)))
    fmt.Printf("   allocateMemory:   %v (1MB)\\n", time.Since(start))
    fmt.Println()

    // Memory stats
    fmt.Println("2. Memory Statistics:")
    var m runtime.MemStats
    runtime.ReadMemStats(&m)
    fmt.Printf("   Alloc:       %d KB\\n", m.Alloc/1024)
    fmt.Printf("   TotalAlloc:  %d KB\\n", m.TotalAlloc/1024)
    fmt.Printf("   Sys:         %d KB\\n", m.Sys/1024)
    fmt.Printf("   NumGC:       %d\\n", m.NumGC)
    fmt.Println()

    // Goroutine info
    fmt.Println("3. Goroutine Info:")
    fmt.Printf("   Active goroutines: %d\\n", runtime.NumGoroutine())
    fmt.Printf("   GOMAXPROCS:        %d\\n", runtime.GOMAXPROCS(0))
    fmt.Println()

    // Top functions by CPU
    fmt.Println("4. Top Functions by CPU Time:")
    for i, sample := range profiler.TopByCPU(3) {
        fmt.Printf("   %d. %s: %v\\n", i+1, sample.Function, sample.CPUTime)
    }
    fmt.Println()

    // pprof endpoints info
    fmt.Println("5. pprof Endpoints (when enabled):")
    fmt.Println("   /debug/pprof/profile   - CPU profile")
    fmt.Println("   /debug/pprof/heap      - Memory profile")
    fmt.Println("   /debug/pprof/goroutine - Goroutine stacks")
}`,
    keyPoints: [
      "pprof is built into Go",
      "CPU profiling shows time spent",
      "Memory profiling shows allocations",
      "Goroutine profiling finds leaks",
      "Trace shows execution timeline",
    ],
    commonMistakes: [
      "Profiling in development only",
      "Not using production-like data",
      "Ignoring memory profiles",
      "Not checking goroutine counts",
    ],
    bestPractices: [
      "Profile in production-like environment",
      "Compare before/after profiles",
      "Monitor goroutine counts",
      "Use continuous profiling in production",
    ],
  },

  "load-testing": {
    content: `
# Load Testing

Test your API's performance under load.

## Tools

- **hey**: Simple HTTP load generator
- **k6**: Modern load testing tool
- **vegeta**: HTTP load testing tool

## Using hey

\`\`\`bash
hey -n 10000 -c 100 http://localhost:8080/api/users
\`\`\`

## Using k6

\`\`\`javascript
import http from 'k6/http';

export default function() {
    http.get('http://localhost:8080/api/users');
}
\`\`\`

## Key Metrics

- **Requests/sec**: Throughput
- **Latency**: Response time (p50, p95, p99)
- **Error rate**: Failed requests
    `,
    code: `package main

import (
    "fmt"
    "math/rand"
    "sort"
    "sync"
    "sync/atomic"
    "time"
)

// LoadTestResult holds metrics from a load test
type LoadTestResult struct {
    TotalRequests   int64
    SuccessCount    int64
    ErrorCount      int64
    Latencies       []time.Duration
    Duration        time.Duration
}

func (r *LoadTestResult) RequestsPerSecond() float64 {
    return float64(r.TotalRequests) / r.Duration.Seconds()
}

func (r *LoadTestResult) Percentile(p float64) time.Duration {
    if len(r.Latencies) == 0 {
        return 0
    }
    sort.Slice(r.Latencies, func(i, j int) bool {
        return r.Latencies[i] < r.Latencies[j]
    })
    idx := int(float64(len(r.Latencies)) * p / 100)
    if idx >= len(r.Latencies) {
        idx = len(r.Latencies) - 1
    }
    return r.Latencies[idx]
}

// LoadTester simulates HTTP load testing
type LoadTester struct {
    concurrency int
    requests    int
}

func NewLoadTester(concurrency, requests int) *LoadTester {
    return &LoadTester{concurrency: concurrency, requests: requests}
}

// simulateRequest simulates an HTTP request with random latency
func simulateRequest() (time.Duration, bool) {
    latency := time.Duration(rand.Intn(50)+5) * time.Millisecond
    time.Sleep(latency / 100) // Speed up for demo
    success := rand.Float32() > 0.02 // 2% error rate
    return latency, success
}

func (lt *LoadTester) Run() *LoadTestResult {
    result := &LoadTestResult{}
    var wg sync.WaitGroup
    requestChan := make(chan struct{}, lt.requests)

    // Fill request channel
    for i := 0; i < lt.requests; i++ {
        requestChan <- struct{}{}
    }
    close(requestChan)

    start := time.Now()
    var mu sync.Mutex

    // Launch concurrent workers
    for i := 0; i < lt.concurrency; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for range requestChan {
                latency, success := simulateRequest()
                atomic.AddInt64(&result.TotalRequests, 1)
                if success {
                    atomic.AddInt64(&result.SuccessCount, 1)
                } else {
                    atomic.AddInt64(&result.ErrorCount, 1)
                }
                mu.Lock()
                result.Latencies = append(result.Latencies, latency)
                mu.Unlock()
            }
        }()
    }

    wg.Wait()
    result.Duration = time.Since(start)
    return result
}

func main() {
    rand.Seed(time.Now().UnixNano())

    fmt.Println("=== Load Testing Demo ===")
    fmt.Println()

    // Run load test
    fmt.Println("Running load test...")
    fmt.Println("  Concurrency: 10 workers")
    fmt.Println("  Requests:    100 total")
    fmt.Println()

    tester := NewLoadTester(10, 100)
    result := tester.Run()

    // Display results
    fmt.Println("=== Results ===")
    fmt.Printf("Total Requests:  %d\\n", result.TotalRequests)
    fmt.Printf("Successful:      %d\\n", result.SuccessCount)
    fmt.Printf("Failed:          %d\\n", result.ErrorCount)
    fmt.Printf("Duration:        %v\\n", result.Duration)
    fmt.Printf("Requests/sec:    %.2f\\n", result.RequestsPerSecond())
    fmt.Println()

    fmt.Println("=== Latency Percentiles ===")
    fmt.Printf("p50:  %v\\n", result.Percentile(50))
    fmt.Printf("p95:  %v\\n", result.Percentile(95))
    fmt.Printf("p99:  %v\\n", result.Percentile(99))
    fmt.Printf("max:  %v\\n", result.Percentile(100))
}`,
    keyPoints: [
      "Test with realistic load patterns",
      "Monitor latency percentiles",
      "Check error rates under load",
      "Test with production-like data",
      "Gradually increase load",
    ],
    commonMistakes: [
      "Testing from same machine",
      "Not warming up the server",
      "Ignoring error rates",
      "Testing with unrealistic data",
    ],
    bestPractices: [
      "Test from separate machines",
      "Use realistic scenarios",
      "Monitor server resources",
      "Establish baseline metrics",
    ],
  },

  aws: {
    content: `
# AWS Deployment

Deploy Go applications to AWS.

## Deployment Options

- **EC2**: Virtual servers
- **ECS/Fargate**: Container orchestration
- **Lambda**: Serverless functions
- **Elastic Beanstalk**: PaaS

## ECS Deployment

1. Push image to ECR
2. Create task definition
3. Create ECS service
4. Configure load balancer

## Lambda with Go

\`\`\`go
func handler(ctx context.Context, event Event) (Response, error) {
    return Response{Message: "Hello!"}, nil
}

func main() {
    lambda.Start(handler)
}
\`\`\`
    `,
    code: `package main

import (
    "context"
    "encoding/json"
    "fmt"
    "time"
)

// Simulating AWS Lambda handler pattern
// In real code, use github.com/aws/aws-lambda-go/lambda

// APIGatewayRequest simulates API Gateway event
type APIGatewayRequest struct {
    HTTPMethod string            \`json:"httpMethod"\`
    Path       string            \`json:"path"\`
    Headers    map[string]string \`json:"headers"\`
    Body       string            \`json:"body"\`
}

// APIGatewayResponse simulates API Gateway response
type APIGatewayResponse struct {
    StatusCode int               \`json:"statusCode"\`
    Headers    map[string]string \`json:"headers"\`
    Body       string            \`json:"body"\`
}

// LambdaContext simulates Lambda context
type LambdaContext struct {
    FunctionName   string
    MemoryLimit    int
    RequestID      string
    RemainingTime  time.Duration
}

// Handler is the Lambda function signature
type Handler func(ctx context.Context, event APIGatewayRequest) (APIGatewayResponse, error)

// Lambda simulates the Lambda runtime
func Lambda(handler Handler) {
    // Simulate incoming request
    event := APIGatewayRequest{
        HTTPMethod: "GET",
        Path:       "/api/users",
        Headers:    map[string]string{"Authorization": "Bearer token123"},
        Body:       "",
    }

    ctx := context.WithValue(context.Background(), "requestId", "abc-123-def")

    fmt.Println("=== AWS Lambda Simulation ===")
    fmt.Println()

    // Log incoming event
    eventJSON, _ := json.MarshalIndent(event, "", "  ")
    fmt.Println("Incoming Event:")
    fmt.Println(string(eventJSON))
    fmt.Println()

    // Execute handler
    start := time.Now()
    response, err := handler(ctx, event)
    duration := time.Since(start)

    if err != nil {
        fmt.Printf("Error: %v\\n", err)
        return
    }

    // Log response
    respJSON, _ := json.MarshalIndent(response, "", "  ")
    fmt.Println("Response:")
    fmt.Println(string(respJSON))
    fmt.Println()

    // Log metrics
    fmt.Println("=== Execution Metrics ===")
    fmt.Printf("Duration:     %v\\n", duration)
    fmt.Printf("Billed:       %dms\\n", (duration.Milliseconds()/100+1)*100)
    fmt.Printf("Memory Used:  45 MB\\n")
    fmt.Printf("Request ID:   abc-123-def\\n")
}

// UserHandler is our Lambda function
func UserHandler(ctx context.Context, event APIGatewayRequest) (APIGatewayResponse, error) {
    users := []map[string]interface{}{
        {"id": 1, "name": "Alice", "email": "alice@example.com"},
        {"id": 2, "name": "Bob", "email": "bob@example.com"},
    }

    body, _ := json.Marshal(map[string]interface{}{
        "users": users,
        "count": len(users),
    })

    return APIGatewayResponse{
        StatusCode: 200,
        Headers: map[string]string{
            "Content-Type": "application/json",
        },
        Body: string(body),
    }, nil
}

func main() {
    // Start Lambda with our handler
    Lambda(UserHandler)
}`,
    keyPoints: [
      "Choose deployment based on requirements",
      "Use ECR for container images",
      "Configure auto-scaling",
      "Use RDS for managed databases",
      "Implement proper IAM roles",
    ],
    commonMistakes: [
      "Over-provisioning resources",
      "Not using auto-scaling",
      "Hardcoding credentials",
      "Missing health checks",
    ],
    bestPractices: [
      "Use infrastructure as code",
      "Implement blue-green deployments",
      "Monitor with CloudWatch",
      "Use secrets manager for credentials",
    ],
  },

  production: {
    content: `
# Production Readiness

Prepare your Go application for production.

## Checklist

- [ ] Graceful shutdown
- [ ] Health checks
- [ ] Structured logging
- [ ] Metrics and monitoring
- [ ] Error tracking
- [ ] Configuration management
- [ ] Security hardening

## Graceful Shutdown

\`\`\`go
quit := make(chan os.Signal, 1)
signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
<-quit

ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
defer cancel()
server.Shutdown(ctx)
\`\`\`

## Structured Logging

Use JSON logging for easy parsing:

\`\`\`go
log.Info().
    Str("user_id", userID).
    Int("status", 200).
    Msg("Request completed")
\`\`\`
    `,
    code: `package main

import (
    "context"
    "encoding/json"
    "fmt"
    "os"
    "os/signal"
    "sync"
    "syscall"
    "time"
)

// Logger provides structured JSON logging
type Logger struct {
    level string
}

func (l *Logger) log(level, msg string, fields map[string]interface{}) {
    entry := map[string]interface{}{
        "timestamp": time.Now().Format(time.RFC3339),
        "level":     level,
        "message":   msg,
    }
    for k, v := range fields {
        entry[k] = v
    }
    data, _ := json.Marshal(entry)
    fmt.Println(string(data))
}

func (l *Logger) Info(msg string, fields map[string]interface{}) {
    l.log("info", msg, fields)
}

func (l *Logger) Error(msg string, fields map[string]interface{}) {
    l.log("error", msg, fields)
}

// HealthChecker checks service dependencies
type HealthChecker struct {
    checks map[string]func() bool
}

func (h *HealthChecker) AddCheck(name string, check func() bool) {
    h.checks[name] = check
}

func (h *HealthChecker) Check() map[string]string {
    results := make(map[string]string)
    for name, check := range h.checks {
        if check() {
            results[name] = "healthy"
        } else {
            results[name] = "unhealthy"
        }
    }
    return results
}

// Server simulates a production server
type Server struct {
    logger  *Logger
    health  *HealthChecker
    running bool
    wg      sync.WaitGroup
}

func NewServer() *Server {
    return &Server{
        logger: &Logger{level: "info"},
        health: &HealthChecker{checks: make(map[string]func() bool)},
    }
}

func (s *Server) Start() {
    s.running = true
    s.logger.Info("Server starting", map[string]interface{}{
        "port": 8080,
        "env":  "production",
    })

    // Add health checks
    s.health.AddCheck("database", func() bool { return true })
    s.health.AddCheck("cache", func() bool { return true })
}

func (s *Server) Shutdown(ctx context.Context) {
    s.logger.Info("Shutdown initiated", nil)
    s.running = false

    // Wait for in-flight requests
    done := make(chan struct{})
    go func() {
        s.wg.Wait()
        close(done)
    }()

    select {
    case <-done:
        s.logger.Info("Graceful shutdown complete", nil)
    case <-ctx.Done():
        s.logger.Error("Shutdown timeout", nil)
    }
}

func main() {
    fmt.Println("=== Production-Ready Go Application ===")
    fmt.Println()

    server := NewServer()
    server.Start()

    // Health check
    fmt.Println("Health Check:")
    for name, status := range server.health.Check() {
        fmt.Printf("  %s: %s\\n", name, status)
    }
    fmt.Println()

    // Simulate graceful shutdown
    fmt.Println("Simulating graceful shutdown...")
    quit := make(chan os.Signal, 1)
    signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)

    // Trigger shutdown after brief delay
    go func() {
        time.Sleep(100 * time.Millisecond)
        quit <- syscall.SIGTERM
    }()

    <-quit
    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()
    server.Shutdown(ctx)
}`,
    keyPoints: [
      "Implement graceful shutdown",
      "Add health check endpoints",
      "Use structured logging",
      "Monitor key metrics",
      "Handle errors gracefully",
    ],
    commonMistakes: [
      "No graceful shutdown",
      "Missing health checks",
      "Unstructured logging",
      "No error tracking",
    ],
    bestPractices: [
      "Use 12-factor app principles",
      "Implement circuit breakers",
      "Set up alerting",
      "Document runbooks",
    ],
  },

  "capstone-1": {
    content: `
# Capstone Project: Planning

Build a complete production-ready Go application.

## Project: URL Shortener Service

A full-featured URL shortening service with:
- REST API
- User authentication
- Analytics tracking
- Rate limiting
- Caching

## Architecture

\`\`\`
┌─────────┐     ┌─────────┐     ┌─────────┐
│  Nginx  │────►│   API   │────►│  Redis  │
│   LB    │     │ Server  │     │  Cache  │
└─────────┘     └─────────┘     └─────────┘
                     │
                     ▼
               ┌─────────┐
               │PostgreSQL│
               └─────────┘
\`\`\`

## Features

1. Create short URLs
2. Redirect to original URL
3. Track click analytics
4. User dashboard
5. API rate limiting
    `,
    code: `package main

import (
    "encoding/json"
    "fmt"
)

// Project structure for URL Shortener
type ProjectStructure struct {
    Name        string
    Description string
    Modules     []Module
}

type Module struct {
    Name        string
    Path        string
    Description string
    Files       []string
}

// API Endpoint definition
type Endpoint struct {
    Method      string
    Path        string
    Description string
    Auth        bool
}

func main() {
    fmt.Println("=== Capstone Project: URL Shortener ===")
    fmt.Println()

    // Define project structure
    project := ProjectStructure{
        Name:        "url-shortener",
        Description: "Production-ready URL shortening service",
        Modules: []Module{
            {
                Name: "API Layer",
                Path: "internal/api",
                Description: "HTTP handlers and routing",
                Files: []string{"handlers.go", "middleware.go", "routes.go"},
            },
            {
                Name: "Domain Models",
                Path: "internal/models",
                Description: "Core business entities",
                Files: []string{"url.go", "user.go", "analytics.go"},
            },
            {
                Name: "Repository",
                Path: "internal/repository",
                Description: "Data access layer",
                Files: []string{"postgres.go", "redis.go"},
            },
            {
                Name: "Services",
                Path: "internal/service",
                Description: "Business logic",
                Files: []string{"shortener.go", "analytics.go", "auth.go"},
            },
        },
    }

    // Display project structure
    fmt.Println("Project Modules:")
    for _, mod := range project.Modules {
        fmt.Printf("\\n  📁 %s (%s)\\n", mod.Name, mod.Path)
        fmt.Printf("     %s\\n", mod.Description)
        for _, f := range mod.Files {
            fmt.Printf("     └── %s\\n", f)
        }
    }
    fmt.Println()

    // Define API endpoints
    endpoints := []Endpoint{
        {"POST", "/api/urls", "Create short URL", false},
        {"GET", "/:code", "Redirect to original URL", false},
        {"GET", "/api/urls/:code", "Get URL details", true},
        {"GET", "/api/stats/:code", "Get click analytics", true},
        {"POST", "/api/auth/register", "Register user", false},
        {"POST", "/api/auth/login", "User login", false},
    }

    fmt.Println("API Endpoints:")
    for _, ep := range endpoints {
        auth := ""
        if ep.Auth { auth = "🔒" }
        fmt.Printf("  %-6s %-20s %s %s\\n", ep.Method, ep.Path, ep.Description, auth)
    }
    fmt.Println()

    // Architecture overview as JSON
    arch := map[string]interface{}{
        "loadBalancer": "nginx",
        "api":          "Go + Gin",
        "database":     "PostgreSQL",
        "cache":        "Redis",
        "auth":         "JWT",
    }
    archJSON, _ := json.MarshalIndent(arch, "", "  ")
    fmt.Println("Architecture:")
    fmt.Println(string(archJSON))
}`,
    keyPoints: [
      "Plan architecture before coding",
      "Define clear API contracts",
      "Consider scalability from start",
      "Use clean architecture principles",
      "Plan for monitoring and observability",
    ],
    commonMistakes: [
      "Starting without a plan",
      "Over-engineering early",
      "Ignoring error handling",
      "Not considering edge cases",
    ],
    bestPractices: [
      "Start with core functionality",
      "Write tests as you go",
      "Document API endpoints",
      "Use feature branches",
    ],
  },

  "capstone-2": {
    content: `
# Capstone: Core Implementation

Implement the URL shortening core functionality.

## Short Code Generation

\`\`\`go
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

func GenerateCode(length int) string {
    b := make([]byte, length)
    for i := range b {
        b[i] = charset[rand.Intn(len(charset))]
    }
    return string(b)
}
\`\`\`

## URL Model

\`\`\`go
type URL struct {
    ID          uint
    Code        string \`gorm:"uniqueIndex"\`
    OriginalURL string
    UserID      *uint
    Clicks      int
    CreatedAt   time.Time
    ExpiresAt   *time.Time
}
\`\`\`

## Service Layer

Implement business logic separate from handlers.
    `,
    code: `package main

import (
    "crypto/rand"
    "fmt"
    "math/big"
    "time"
)

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

func generateCode(length int) string {
    b := make([]byte, length)
    for i := range b {
        n, _ := rand.Int(rand.Reader, big.NewInt(int64(len(charset))))
        b[i] = charset[n.Int64()]
    }
    return string(b)
}

type URL struct {
    Code        string
    OriginalURL string
    Clicks      int
    CreatedAt   time.Time
}

type URLService struct {
    urls map[string]*URL
}

func NewURLService() *URLService {
    return &URLService{urls: make(map[string]*URL)}
}

func (s *URLService) Shorten(originalURL string) *URL {
    code := generateCode(6)
    url := &URL{
        Code:        code,
        OriginalURL: originalURL,
        Clicks:      0,
        CreatedAt:   time.Now(),
    }
    s.urls[code] = url
    return url
}

func (s *URLService) Resolve(code string) (*URL, bool) {
    url, exists := s.urls[code]
    if exists {
        url.Clicks++
    }
    return url, exists
}

func main() {
    service := NewURLService()

    // Create short URLs
    url1 := service.Shorten("https://golang.org")
    url2 := service.Shorten("https://github.com")

    fmt.Println("URL Shortener Demo")
    fmt.Println("==================")
    fmt.Printf("\\n%s -> %s\\n", url1.Code, url1.OriginalURL)
    fmt.Printf("%s -> %s\\n", url2.Code, url2.OriginalURL)

    // Simulate clicks
    service.Resolve(url1.Code)
    service.Resolve(url1.Code)

    fmt.Printf("\\n%s has %d clicks\\n", url1.Code, url1.Clicks)
}`,
    keyPoints: [
      "Use crypto/rand for secure random codes",
      "Implement service layer for business logic",
      "Track click analytics",
      "Handle URL validation",
      "Consider code collisions",
    ],
    commonMistakes: [
      "Using math/rand for codes",
      "Not validating URLs",
      "Ignoring code collisions",
      "Mixing business logic in handlers",
    ],
    bestPractices: [
      "Use interfaces for testability",
      "Validate URL format",
      "Handle duplicate codes",
      "Add expiration support",
    ],
  },

  "capstone-3": {
    content: `
# Capstone: API & Authentication

Build the REST API with JWT authentication.

## API Routes

\`\`\`go
r.POST("/api/auth/register", authHandler.Register)
r.POST("/api/auth/login", authHandler.Login)

api := r.Group("/api")
api.Use(AuthMiddleware())
{
    api.POST("/urls", urlHandler.Create)
    api.GET("/urls", urlHandler.List)
    api.GET("/urls/:code/stats", urlHandler.Stats)
}

r.GET("/:code", urlHandler.Redirect)
\`\`\`

## Create URL Handler

\`\`\`go
func (h *URLHandler) Create(c *gin.Context) {
    var input CreateURLInput
    c.BindJSON(&input)

    userID := c.GetUint("user_id")
    url := h.service.Create(input.URL, userID)

    c.JSON(201, url)
}
\`\`\`
    `,
    code: `package main

import (
    "encoding/json"
    "fmt"
    "net/url"
    "time"
)

// Request/Response types
type CreateURLRequest struct {
    URL       string \`json:"url"\`
    ExpiresIn *int   \`json:"expires_in"\` // hours
}

type URLResponse struct {
    Code      string \`json:"code"\`
    ShortURL  string \`json:"short_url"\`
    Original  string \`json:"original_url"\`
    ExpiresAt string \`json:"expires_at,omitempty"\`
}

type ErrorResponse struct {
    Error   string \`json:"error"\`
    Details string \`json:"details,omitempty"\`
}

// URLHandler handles HTTP requests
type URLHandler struct {
    baseURL string
}

func NewURLHandler(baseURL string) *URLHandler {
    return &URLHandler{baseURL: baseURL}
}

// ValidateURL checks if URL is valid
func (h *URLHandler) ValidateURL(rawURL string) error {
    parsed, err := url.Parse(rawURL)
    if err != nil {
        return fmt.Errorf("invalid URL format")
    }
    if parsed.Scheme != "http" && parsed.Scheme != "https" {
        return fmt.Errorf("URL must use http or https")
    }
    if parsed.Host == "" {
        return fmt.Errorf("URL must have a host")
    }
    return nil
}

// Create handles POST /api/urls
func (h *URLHandler) Create(req CreateURLRequest) (interface{}, int) {
    // Validate
    if req.URL == "" {
        return ErrorResponse{Error: "URL is required"}, 400
    }
    if err := h.ValidateURL(req.URL); err != nil {
        return ErrorResponse{Error: err.Error()}, 400
    }

    // Create short URL (simulated)
    code := "abc123"
    resp := URLResponse{
        Code:     code,
        ShortURL: h.baseURL + "/" + code,
        Original: req.URL,
    }

    if req.ExpiresIn != nil {
        expires := time.Now().Add(time.Duration(*req.ExpiresIn) * time.Hour)
        resp.ExpiresAt = expires.Format(time.RFC3339)
    }

    return resp, 201
}

// Redirect handles GET /:code
func (h *URLHandler) Redirect(code string) (string, int) {
    // Simulated lookup
    urls := map[string]string{
        "abc123": "https://golang.org",
        "xyz789": "https://github.com",
    }

    if original, ok := urls[code]; ok {
        return original, 302
    }
    return "", 404
}

func main() {
    fmt.Println("=== URL Shortener API Demo ===")
    fmt.Println()

    handler := NewURLHandler("https://short.ly")

    // Test Create endpoint
    fmt.Println("1. POST /api/urls")
    hours := 24
    req := CreateURLRequest{URL: "https://golang.org", ExpiresIn: &hours}
    resp, status := handler.Create(req)
    respJSON, _ := json.MarshalIndent(resp, "   ", "  ")
    fmt.Printf("   Status: %d\\n", status)
    fmt.Printf("   Response:\\n   %s\\n\\n", respJSON)

    // Test validation
    fmt.Println("2. POST /api/urls (invalid)")
    req2 := CreateURLRequest{URL: "not-a-url"}
    resp2, status2 := handler.Create(req2)
    resp2JSON, _ := json.MarshalIndent(resp2, "   ", "  ")
    fmt.Printf("   Status: %d\\n", status2)
    fmt.Printf("   Response:\\n   %s\\n\\n", resp2JSON)

    // Test Redirect
    fmt.Println("3. GET /abc123")
    location, status3 := handler.Redirect("abc123")
    fmt.Printf("   Status: %d\\n", status3)
    fmt.Printf("   Location: %s\\n", location)
}`,
    keyPoints: [
      "Validate input with binding tags",
      "Return appropriate status codes",
      "Track analytics asynchronously",
      "Use middleware for authentication",
      "Handle errors gracefully",
    ],
    commonMistakes: [
      "Blocking on analytics tracking",
      "Not validating URL format",
      "Missing error handling",
      "Exposing internal errors",
    ],
    bestPractices: [
      "Use async for non-critical operations",
      "Return consistent response format",
      "Log all errors",
      "Rate limit public endpoints",
    ],
  },

  "capstone-4": {
    content: `
# Capstone: Caching & Analytics

Add Redis caching and click analytics.

## Redis Caching

\`\`\`go
func (s *URLService) Resolve(code string) (*URL, error) {
    // Try cache first
    cached, err := s.redis.Get(ctx, "url:"+code).Result()
    if err == nil {
        return parseURL(cached), nil
    }

    // Cache miss - fetch from DB
    url, err := s.repo.FindByCode(code)
    if err != nil {
        return nil, err
    }

    // Cache for 1 hour
    s.redis.Set(ctx, "url:"+code, url.ToJSON(), time.Hour)
    return url, nil
}
\`\`\`

## Click Analytics

Track:
- Timestamp
- IP address (hashed)
- User agent
- Referrer
- Country (from IP)
    `,
    code: `package main

import (
    "crypto/sha256"
    "encoding/hex"
    "encoding/json"
    "fmt"
    "sync"
    "time"
)

// Click represents a URL click event
type Click struct {
    URLCode   string    \`json:"url_code"\`
    Timestamp time.Time \`json:"timestamp"\`
    IPHash    string    \`json:"ip_hash"\`
    UserAgent string    \`json:"user_agent"\`
    Country   string    \`json:"country"\`
}

// Stats holds analytics data
type Stats struct {
    TotalClicks    int            \`json:"total_clicks"\`
    UniqueVisitors int            \`json:"unique_visitors"\`
    ByCountry      map[string]int \`json:"by_country"\`
    ByDay          map[string]int \`json:"by_day"\`
}

// AnalyticsService handles click tracking
type AnalyticsService struct {
    clicks  []Click
    cache   map[string]*Stats
    mu      sync.RWMutex
}

func NewAnalyticsService() *AnalyticsService {
    return &AnalyticsService{
        cache: make(map[string]*Stats),
    }
}

// HashIP hashes IP for privacy
func HashIP(ip string) string {
    hash := sha256.Sum256([]byte(ip + "salt"))
    return hex.EncodeToString(hash[:8])
}

// TrackClick records a click event
func (s *AnalyticsService) TrackClick(code, ip, userAgent, country string) {
    s.mu.Lock()
    defer s.mu.Unlock()

    click := Click{
        URLCode:   code,
        Timestamp: time.Now(),
        IPHash:    HashIP(ip),
        UserAgent: userAgent,
        Country:   country,
    }
    s.clicks = append(s.clicks, click)

    // Invalidate cache
    delete(s.cache, code)
}

// GetStats returns analytics for a URL
func (s *AnalyticsService) GetStats(code string) *Stats {
    s.mu.RLock()
    if cached, ok := s.cache[code]; ok {
        s.mu.RUnlock()
        return cached
    }
    s.mu.RUnlock()

    // Calculate stats
    stats := &Stats{
        ByCountry: make(map[string]int),
        ByDay:     make(map[string]int),
    }
    uniqueIPs := make(map[string]bool)

    s.mu.RLock()
    for _, click := range s.clicks {
        if click.URLCode == code {
            stats.TotalClicks++
            uniqueIPs[click.IPHash] = true
            stats.ByCountry[click.Country]++
            day := click.Timestamp.Format("2006-01-02")
            stats.ByDay[day]++
        }
    }
    s.mu.RUnlock()

    stats.UniqueVisitors = len(uniqueIPs)

    // Cache result
    s.mu.Lock()
    s.cache[code] = stats
    s.mu.Unlock()

    return stats
}

func main() {
    fmt.Println("=== Caching & Analytics Demo ===")
    fmt.Println()

    analytics := NewAnalyticsService()

    // Simulate clicks
    fmt.Println("Tracking clicks...")
    analytics.TrackClick("abc123", "192.168.1.1", "Chrome/120", "US")
    analytics.TrackClick("abc123", "192.168.1.2", "Firefox/121", "UK")
    analytics.TrackClick("abc123", "192.168.1.1", "Chrome/120", "US")
    analytics.TrackClick("abc123", "10.0.0.1", "Safari/17", "CA")
    fmt.Println("  4 clicks tracked\\n")

    // Get stats
    stats := analytics.GetStats("abc123")
    statsJSON, _ := json.MarshalIndent(stats, "", "  ")
    fmt.Println("Analytics for abc123:")
    fmt.Println(string(statsJSON))
}`,
    keyPoints: [
      "Cache frequently accessed data",
      "Use async processing for analytics",
      "Hash IPs for privacy",
      "Batch database writes",
      "Set appropriate cache TTLs",
    ],
    commonMistakes: [
      "Storing raw IP addresses",
      "Synchronous analytics tracking",
      "No cache invalidation strategy",
      "Unbounded buffers",
    ],
    bestPractices: [
      "Use Redis for hot data",
      "Implement cache-aside pattern",
      "Batch analytics writes",
      "Consider privacy regulations",
    ],
  },

  "capstone-5": {
    content: `
# Capstone: Testing & Documentation

Write comprehensive tests and API documentation.

## Unit Tests

\`\`\`go
func TestGenerateCode(t *testing.T) {
    code := GenerateCode(6)
    assert.Len(t, code, 6)
    assert.Regexp(t, "^[a-zA-Z0-9]+$", code)
}
\`\`\`

## Integration Tests

\`\`\`go
func TestCreateURL(t *testing.T) {
    router := setupTestRouter()

    w := httptest.NewRecorder()
    body := \`{"url":"https://example.com"}\`
    req, _ := http.NewRequest("POST", "/api/urls", strings.NewReader(body))

    router.ServeHTTP(w, req)

    assert.Equal(t, 201, w.Code)
}
\`\`\`

## API Documentation

Use Swagger/OpenAPI for documentation.
    `,
    code: `package main

import (
    "fmt"
    "strings"
)

// Test represents a test case
type Test struct {
    Name   string
    Passed bool
    Error  string
}

// TestSuite runs tests
type TestSuite struct {
    tests   []Test
    passed  int
    failed  int
}

func (ts *TestSuite) Run(name string, testFn func() error) {
    test := Test{Name: name}
    if err := testFn(); err != nil {
        test.Passed = false
        test.Error = err.Error()
        ts.failed++
    } else {
        test.Passed = true
        ts.passed++
    }
    ts.tests = append(ts.tests, test)
}

func (ts *TestSuite) Report() {
    fmt.Println("=== Test Results ===")
    for _, t := range ts.tests {
        status := "✓ PASS"
        if !t.Passed {
            status = "✗ FAIL"
        }
        fmt.Printf("%s %s\\n", status, t.Name)
        if t.Error != "" {
            fmt.Printf("       Error: %s\\n", t.Error)
        }
    }
    fmt.Printf("\\nTotal: %d passed, %d failed\\n", ts.passed, ts.failed)
}

// assertEqual checks equality
func assertEqual(expected, actual interface{}) error {
    if expected != actual {
        return fmt.Errorf("expected %v, got %v", expected, actual)
    }
    return nil
}

// assertNotEmpty checks non-empty string
func assertNotEmpty(s string) error {
    if s == "" {
        return fmt.Errorf("expected non-empty string")
    }
    return nil
}

// URL shortener functions to test
func generateCode(length int) string {
    return "abc123" // Simplified for demo
}

func validateURL(url string) error {
    if !strings.HasPrefix(url, "http://") && !strings.HasPrefix(url, "https://") {
        return fmt.Errorf("invalid URL scheme")
    }
    return nil
}

func main() {
    fmt.Println("=== Testing Demo ===")
    fmt.Println()

    suite := &TestSuite{}

    // Unit tests
    suite.Run("TestGenerateCode_Length", func() error {
        code := generateCode(6)
        if len(code) != 6 {
            return fmt.Errorf("expected length 6, got %d", len(code))
        }
        return nil
    })

    suite.Run("TestGenerateCode_NotEmpty", func() error {
        code := generateCode(6)
        return assertNotEmpty(code)
    })

    suite.Run("TestValidateURL_Valid", func() error {
        return validateURL("https://example.com")
    })

    suite.Run("TestValidateURL_Invalid", func() error {
        err := validateURL("not-a-url")
        if err == nil {
            return fmt.Errorf("expected error for invalid URL")
        }
        return nil
    })

    suite.Run("TestValidateURL_HTTP", func() error {
        return validateURL("http://example.com")
    })

    // Report results
    fmt.Println()
    suite.Report()

    // Coverage info
    fmt.Println()
    fmt.Println("=== Coverage ===")
    fmt.Println("generateCode: 100%")
    fmt.Println("validateURL:  100%")
    fmt.Println("Total:        100%")
}`,
    keyPoints: [
      "Write unit tests for business logic",
      "Write integration tests for API",
      "Use test fixtures and helpers",
      "Aim for high code coverage",
      "Document API with OpenAPI",
    ],
    commonMistakes: [
      "Testing implementation, not behavior",
      "No integration tests",
      "Tests that depend on order",
      "Missing edge case tests",
    ],
    bestPractices: [
      "Use table-driven tests",
      "Mock external dependencies",
      "Test error cases",
      "Keep tests independent",
    ],
  },

  "capstone-6": {
    content: `
# Capstone: Deployment

Deploy the URL shortener to production.

## Docker Compose

\`\`\`yaml
services:
  api:
    build: .
    ports:
      - "8080:8080"
    environment:
      - DATABASE_URL=postgres://...
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis

  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
\`\`\`

## Production Checklist

- [ ] HTTPS configured
- [ ] Environment variables set
- [ ] Database migrations run
- [ ] Monitoring enabled
- [ ] Backups configured
    `,
    code: `package main

import (
    "encoding/json"
    "fmt"
    "time"
)

// DeploymentConfig represents production configuration
type DeploymentConfig struct {
    Version     string            \`json:"version"\`
    Environment string            \`json:"environment"\`
    Services    map[string]Service \`json:"services"\`
    Replicas    int               \`json:"replicas"\`
}

type Service struct {
    Image   string \`json:"image"\`
    Port    int    \`json:"port"\`
    Healthy bool   \`json:"healthy"\`
}

// DeploymentStep represents a deployment step
type DeploymentStep struct {
    Name     string
    Duration time.Duration
    Status   string
}

func runDeployment(config DeploymentConfig) []DeploymentStep {
    steps := []DeploymentStep{
        {Name: "Pull Docker images", Duration: 2 * time.Second},
        {Name: "Run database migrations", Duration: 1 * time.Second},
        {Name: "Start services", Duration: 3 * time.Second},
        {Name: "Health check", Duration: 500 * time.Millisecond},
        {Name: "Update load balancer", Duration: 1 * time.Second},
    }

    for i := range steps {
        // Simulate step execution
        time.Sleep(50 * time.Millisecond)
        steps[i].Status = "✓ Complete"
    }

    return steps
}

func main() {
    fmt.Println("=== Production Deployment Demo ===")
    fmt.Println()

    // Define deployment configuration
    config := DeploymentConfig{
        Version:     "1.0.0",
        Environment: "production",
        Replicas:    3,
        Services: map[string]Service{
            "api": {
                Image:   "url-shortener:1.0.0",
                Port:    8080,
                Healthy: true,
            },
            "postgres": {
                Image:   "postgres:15-alpine",
                Port:    5432,
                Healthy: true,
            },
            "redis": {
                Image:   "redis:7-alpine",
                Port:    6379,
                Healthy: true,
            },
        },
    }

    // Display configuration
    fmt.Println("Deployment Configuration:")
    configJSON, _ := json.MarshalIndent(config, "", "  ")
    fmt.Println(string(configJSON))
    fmt.Println()

    // Run deployment
    fmt.Println("Running Deployment...")
    steps := runDeployment(config)
    for _, step := range steps {
        fmt.Printf("  %s %s\\n", step.Status, step.Name)
    }
    fmt.Println()

    // Final status
    fmt.Println("=== Deployment Complete ===")
    fmt.Printf("Version:     %s\\n", config.Version)
    fmt.Printf("Environment: %s\\n", config.Environment)
    fmt.Printf("Replicas:    %d\\n", config.Replicas)
    fmt.Println()

    fmt.Println("Service Status:")
    for name, svc := range config.Services {
        status := "✓ healthy"
        if !svc.Healthy {
            status = "✗ unhealthy"
        }
        fmt.Printf("  %s: %s (port %d)\\n", name, status, svc.Port)
    }
    fmt.Println()

    fmt.Println("🎉 Congratulations!")
    fmt.Println("You've completed the URL Shortener capstone project!")
}`,
    keyPoints: [
      "Use Docker for consistent deployments",
      "Configure environment-specific settings",
      "Set up monitoring and alerting",
      "Implement backup strategies",
      "Document deployment process",
    ],
    commonMistakes: [
      "No rollback plan",
      "Missing health checks",
      "No monitoring",
      "Hardcoded secrets",
    ],
    bestPractices: [
      "Use infrastructure as code",
      "Implement blue-green deployments",
      "Set up automated backups",
      "Monitor key metrics",
    ],
  },
};

