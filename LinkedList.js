class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the beginning of the linked list
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Insert at the end of the linked list
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Delete from the beginning of the linked list
    deleteFromBeginning() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        this.head = this.head.next;
    }

    // Delete from the end of the linked list
    deleteFromEnd() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    // Display the linked list
    display() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        while (current) {
            process.stdout.write(current.data + " -> ");
            current = current.next;
        }
        console.log("null");
    }
}

function linkedListMenu() {
    const list = new LinkedList();
    let choice, data;
    const prompt = require('prompt-sync')(); // Use prompt-sync for input in Node.js
    
    while (true) {
        console.log("\nMenu:");
        console.log("1. Insert at Beginning");
        console.log("2. Insert at End");
        console.log("3. Delete from Beginning");
        console.log("4. Delete from End");
        console.log("5. Display");
        console.log("6. Exit");
        
        choice = parseInt(prompt("Enter your choice: "));

        switch (choice) {
            case 1:
                data = parseInt(prompt("Enter value to insert at beginning: "));
                list.insertAtBeginning(data);
                console.log("Inserted at the beginning.");
                list.display();
                break;

            case 2:
                data = parseInt(prompt("Enter value to insert at end: "));
                list.insertAtEnd(data);
                console.log("Inserted at the end.");
                list.display();
                break;

            case 3:
                list.deleteFromBeginning();
                console.log("Deleted from the beginning.");
                list.display();
                break;

            case 4:
                list.deleteFromEnd();
                console.log("Deleted from the end.");
                list.display();
                break;

            case 5:
                console.log("Displaying the linked list:");
                list.display();
                break;

            case 6:
                console.log("Exiting...");
                return; 

            default:
                console.log("Invalid choice. Please enter a number between 1 and 6.");
        }
    }
}

// Start the menu
linkedListMenu();
