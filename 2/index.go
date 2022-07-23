package main

func main() {
    //create slice
    var fibonacci []int = []int{1, 2}
    var value int = 0
    var i int = 0

    for value < 4000000 {
        value = fibonacci[i] + fibonacci[i+1]
        fibonacci = append(fibonacci, value)
        i++
    }
    fibonacci = fibonacci[:len(fibonacci)-1]

    //filter fibonacci
    var sum int = 0
    for _, value := range fibonacci {
        if value%2 == 0 {
            sum += value
        }
    }

    println(sum)
}
