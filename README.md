# angular-data-sharing-between-components

Sharing Data between components

     4 Methods to Share Data between Components in Angular
     Method 1: Parent to Child via @Input decorator.
     Method 2: Child to Parent via @Output decorator and EventEmitter.
     Method 3: Child to Parent via @ViewChild decorator.
     Method 4: Unrelated Components via a Service.

     https://www.samarpaninfotech.com/blog/methods-to-share-data-between-angular-components/

     Method 1: Parent to Child via @Input decorator.
                Let’s assume, you have one component, where you have some data and you want to supply that data to the child component, How it possible ??? Answer is @input. So what is @Input?? @Input is a decorator which allows you to accept the input from the parent component. Input can be imported from @angular/core.

    Method 2: Child to Parent via @Output decorator and EventEmitter
                If you want to pass data from the child component to the parent component use @Output() and EventEmitter.

                First, let us discuss what is @Output and EventEmitter, @Output is a component decorator which becomes the output for the parent component and EventEmitter is something that has the capability to propagate the event from the child component to the parent component.

                To pass data from the child to the parent, you have to emit it from the child. The parent will be listening for the event will grab the data.

    Method 3: Child to Parent via @ViewChild decorator
                Here as we know we have @output and event emitter to share the data from child to parent component, so why @Viewchild is needed ? hold on it is needed because it gives extra control to parent component to access the child events.

                Here we are just understanding by passing the data from child to parent by using @Viewchild decorator, Let’s see.
