/*

1. What is Object-Oriented Programming (OOP) ?
Answer :
* OOP is a programming paradigm based on the concept of "objects" which can contain data, in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).
* OOP ek programming paradigm hai jo objects ka use karta hai to design and structure code.
* Iska basic idea yeh hai ki tum apne code ko real-world entities ke jaisa soch ke design karte ho.
* Real-world entities ko objects ki tarah treat karte ho, jinke paas apne attributes (properties) aur behaviors (methods) hote hain.
* Key Concepts of OOP :-
    Class -
        Blueprint for objects.
        Class ek blueprint ya template hota hai jisse objects banaye jaate hain.
        Ex - Agar tumhe car banani hai, toh “Car” class tumhe define karegi ki car kaise banegi (attributes like color, model, brand, etc.).
    Object -
        Instance of class.
        Object ek instance hota hai class ka, jo real-world entity ko represent karta hai.
        Ex - myCar ek object ho sakta hai class Car ka, jiska color “Red” hai aur brand “Honda”.
    Encapsulation -
        Data ko hide karna aur methods ke through access dena.
        Encapsulation ka matlab hai data ko protect karna aur usko direct access nahi dena, sirf controlled access provide karna (through methods).
        Ex - Car ke andar ka engine protected hai, tum sirf ignition button use kar ke car chala sakte ho, engine ko directly access nahi kar sakte.
    Inheritance -
        Ek class doosri class ke features ko inherit karti hai.
        Inheritance ek concept hai jisme ek class doosri class ke properties aur methods inherit kar sakti hai.
        Ex - ElectricCar class, Car class se inherit karegi, jo common attributes (like wheels, doors) ko use karegi but apne unique features (like battery) add karegi.
    Polymorphism -
        Same method name but different behavior for different objects.
        Polymorphism ka matlab hai ek interface ke through multiple forms ka behavior dikhana.
        Ex - Ek “Drive” method har vehicle (Car, Bike) ke liye alag behavior perform karega, par tum same method naam use karoge.
    Abstraction -
        Complex details ko hide karna aur sirf important information dikhana.
        Abstraction ka matlab hai complexity ko hide karna aur sirf important details dikhana.
        Ex - Tum car ka steering ghoomate ho, par kaise wheels ghoomte hain, yeh detail nahi dikhai jaati.

2. Why do we use or study OOP ?
Answer :
* OOP ka use karne ka main reason yeh hai ki yeh real-world problems ko solve karne ke liye code ko organize aur manage karne ka ek efficient tareeka deta hai.
* Isme code reusability, maintainability, aur scalability ko improve karne ke liye kuch aise features diye gaye hain jo traditional programming se better hain.
* OOP ka use karne ke main benefits :-
    Real-World Problem Representation -
        Tumhare code ko zyada natural aur real-world jaisa banata hai.
        OOP real-world entities ko represent karna asaan banaata hai.
        Objects ko banake tum real-world cheezo (jaise car, bank account, employee) ka simulation kar sakte ho, jisse tumhe problem ko better tarike se model karne ka tareeka milta hai.
        Ex - Agar tumhe ek “Car” ko program karna hai, toh tum uske features (brand, color, speed) aur behavior (drive, stop) ko as objects define kar sakte ho.
    Code Reusability (Inheritance) -
        Ek baar likha code doosri classes mein reuse kar sakte ho (Inheritance).
        Inheritance ki wajah se tum ek baar likha hua code baar-baar reuse kar sakte ho bina naye se likhne ke.
        Agar tumhe kisi class ke features aur behaviors use karne hain, tum inherit kar ke apna customized object bana sakte ho.
        Ex - Tum ek Car class banate ho, fir usi se ElectricCar aur SportsCar inherit kar sakte ho aur extra features add kar sakte ho.
    Maintainability (Encapsulation) -
        Code ko manage aur change karna easy hota hai (Encapsulation).
        Encapsulation ke through tum apna code modular bana sakte ho.
        Data aur methods ko class ke andar rakhna data ko manage karne aur protect karne mein madad karta hai.
        Agar future mein changes karne padte hain, toh tum easily ek part mein changes kar ke apna kaam kar sakte ho, bina poore code ko break kiye.
        Ex - Agar Car ka engine code change karna hai, toh tumhe sirf engine ke code pe kaam karna padega, baaki cheezon ko change nahi karna.
    Extensibility (Polymorphism) -
        Tum methods ko alag-alag objects ke liye customize kar sakte ho (Polymorphism).
        Polymorphism ki wajah se tum same method ko different ways se use kar sakte ho, jo flexibility aur extensibility ko enhance karta hai.
        Ex - Tum ek Vehicle class bana sakte ho jisme drive() method ho. Fir Car, Bike, aur Truck classes me har ek ka drive() alag behavior show karega, but tum same method call karoge.
    Abstraction for Complexity Reduction -
        Complex details ko hide karke simplicity provide karta hai.
        OOP abstraction se complexity ko reduce karta hai.
        Sirf important details ko dikhaya jaata hai aur complex cheezon ko hide kiya jaata hai, jisse user ko sirf simple interface milta hai.
        Ex - Jab tum phone pe ek app open karte ho, tumhe uske backend ka code ya process nahi dikhai deta, sirf UI dikhai deta hai. Same cheez programming mein abstraction se achieve hoti hai.
    Modularity -
        Code ko tod ke small, manageable parts mein divide karta hai.
        OOP classes aur objects mein code ko tod kar likhne ko promote karta hai.
        Har class ka apna kaam hota hai aur wo independently kaam karti hai.
        Isse code samajhna aur debug karna easy ho jaata hai.
        Ex - Tum ek Customer class aur ek Order class alag-alag likh sakte ho. Dono independent hain, par saath mein kaam karte hain.
    Security (Encapsulation) -
        Sensitive data ko protect karta hai.
        Data ko encapsulate kar ke tum access ko restrict kar sakte ho.
        Sensitive data ko protect kar sakte ho, jisse har koi usko access nahi kar sakta bina proper methods ke.
        Ex - Bank account ki information ko direct access nahi kar sakte, sirf specific methods se hi access kiya jaa sakta hai, jaise getBalance().

3. What are the Limitations of OOP ?
Answer :
* Jitni powerful aur useful Object-Oriented Programming (OOP) hoti hai, uske kuch limitations bhi hain.
* Sabse bada limitation yeh hai ki OOP har type ke problem ke liye ideal nahi hoti.
* Kuch specific cases mein OOP ki complexity ya restrictions problematic ho sakti hain.
* Main Limitations of OOP :-
    Increased Complexity for Small Problems -
        Agar tum small projects ya problems solve kar rahe ho, toh OOP ka use karna unnecessary complexity create kar sakta hai.
        Chhoti applications ke liye classes aur objects banane se zyada time aur resources lag sakte hain.
        Ex - Agar tum ek simple calculator app bana rahe ho, toh OOP ka use unnecessary overhead create karega.Functional programming zyada asaan hoti aise cases mein.
    Steeper Learning Curve -
        OOP concepts (jaise inheritance, polymorphism, encapsulation, abstraction) beginners ke liye thoda complex ho sakte hain.
        Yeh paradigms samajhne aur efficiently implement karne mein time lagta hai.
        Ex - Beginner programmers ko polymorphism ya encapsulation ke implementation ke time errors ya bugs handle karna difficult lagta hai.
    Overhead in Memory and Performance -
        OOP me har object ke liye memory allocate hoti hai, aur agar tum large-scale projects ya applications bana rahe ho jisme bohot saare objects hote hain, toh memory aur performance issues create ho sakte hain.
        Ex - Agar ek game develop kar rahe ho aur har entity (player, enemy, obstacle) ko objects ki tarah treat karte ho, toh large objects create karne se memory usage aur performance slow ho sakti hai.
    Tight Coupling -
        OOP ke kuch designs tightly coupled hote hain, yaani classes ek doosre par heavily dependent ho jaati hain.
        Yeh future changes ko difficult bana dete hain, kyunki ek class me changes karne se doosri classes bhi impact hoti hain.
        Ex - Agar tumne ek Car class aur ek Engine class tightly couple ki hui hai, toh agar tumhe engine ka behavior change karna hai, toh car class bhi modify karni pad sakti hai.
    Not Ideal for All Problem Types -
        Sabhi problems ko OOP model se easily solve nahi kiya ja sakta.
        Kuch problems mein procedural ya functional programming zyada natural aur effective hoti hai.
        Ex - Mathematical problems (jaise matrix calculations) ya data processing ke tasks jisme step-by-step execution ki zarurat hoti hai, functional programming ka use karna zyada simple aur efficient hota hai.
    Slower Execution Time -
        OOP-based programs ka execution time functional ya procedural programming se slow ho sakta hai, kyunki OOP me inheritance, method overriding, aur object-oriented design ki wajah se zyada processing lagti hai.
        Ex - Agar tum ek real-time system bana rahe ho, jisme performance critical hoti hai, toh OOP ka overhead program ko slow bana sakta hai.
    Requires Planning and Design -
        OOP approach kaafi planning aur design demand karti hai.
        Tumhe pehle se sochna padta hai ki kaise classes define karoge, kaise inheritance ka use karoge, aur kaise encapsulation implement karoge.
        Poor planning se code complex aur difficult to maintain ho sakta hai.
        Ex - Agar tum ek large project bina proper planning ke start karte ho, toh project ke beech mein classes ko change ya redesign karna bohot tough ho sakta hai.
    Inheritance Problems -
        OOP me inheritance kabhi-kabhi confusion create karta hai, especially jab classes ka deep hierarchy ban jaata hai. Too much inheritance se code complex aur hard to understand ho jaata hai.
        Ex - Agar ek Vehicle class se Car class inherit kar rahi hai, aur uske niche ElectricCar aur HybridCar inherit kar rahi hain, toh agar kuch properties top level par change hoti hain, neeche ki classes bhi uska impact face karti hain.

4. What Does it Mean When We Say a Language is Object-Oriented ?
Answer :
* Agar hum kehte hain ki koi language Object-Oriented hai, iska matlab yeh hota hai ki wo language Object-Oriented Programming (OOP) ke principles ko support karti hai.
* OOP ke principles ka use karke tum apne code ko objects aur classes ke form mein organize aur structure kar sakte ho.
* Isme tum real-world entities ko code mein model karne ke liye objects ka use karte ho, jo ki ek combination hota hai data (attributes) aur methods (functions) ka.
* Characteristics of an Object-Oriented Language :-
    Supports Classes and Objects -
        Language mein classes aur objects ka support hota hai jo real-world entities ko represent karne ke liye use hote hain.
    Follows OOP Principles -
        Language OOP ke 4 pillars ko support karti hai :
            	Encapsulation
	            Inheritance
	            Polymorphism
	            Abstraction
    Modularity and Code Reusability -
        OOP languages mein code ko modular parts mein divide karne ka tareeka diya jaata hai, jisse classes ko alag-alag maintain karna easy hota hai, aur tum easily code reuse kar sakte ho.
    Data Hiding and Security -
        Encapsulation ka feature data hiding ko promote karta hai, jo sensitive information ko protect karne mein help karta hai.
    Dynamic Dispatch (Runtime Polymorphism) -
        Object-oriented languages mein method calls runtime pe decide hote hain, jo polymorphism ka ek part hai. Isse tum alag-alag objects ke methods ko different tareeke se call kar sakte ho.
* Ex of some OOP Languages -
    Java, C++, Python, aur C# jaise languages Object-Oriented hoti hain, kyunki ye OOP ke principles ko fully implement karti hain.
* These core concepts define whether a language can be considered truly object-oriented.

*/
