package main

func main() {
	n := 600851475143

	//find prime factors for n
	primeFactors := make([]int, 0)
	for i := 2; i <= n; i++ {
		if n%i == 0 {
			primeFactors = append(primeFactors, i)
			n = n / i
			i--
		}
	}
	println(primeFactors[len(primeFactors)-1])
}
