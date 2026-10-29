# Functional Requirements for Frontend Interface

## Opening Component (Trigger & Modal)
- RF01 (Floating Button): The system must display a fixed floating button in the lower  
corner of the screen, containing an icon representing the assistant.

- RF02 (Open/Close): When clicking the floating button, the interface must toggle the  
visibility of the chat modal or panel (open/closed), possibly including a smooth  
transition animation.

- RF03 (Closed State with Notifications): When the chat is closed, the button must  
be able to display a visual indicator (badge with number or red dot) if new unread  
messages remain.

## Message Stack (History and Display)
- RF04 (Message Rendering): The chat must display a history or list (stack) of  
messages visually differentiating between sending (user vs. artificial intelligence).

- RF05 (Automatic Scrolling): Whenever a new message is sent or received, the message  
stack should automatically scroll to the end (auto-scroll), ensuring that the last  
interaction is optically visible.

- RF06 (Text Formatting): The interface should support basic formatting in AI  
responses (such as bold, lists, and line breaks via simple Markdown or secure HTML).

- RF07 (Date/Time Stamp): Each message balloon should display the location where  
it was sent or received.

## Loading and Status Indicators
- RF08 (Indicator on the Send Icon/Button): The send message button or AI icon  
should change its visual state (e.g., display a "loading" icon or pulse animation)  
while the request to n8n is being processed.

- RF09 (Typing Indicator / "Thinking"): In the message stack, the frontend should  
display a visual typing indicator (three animated dots) simulating that an AI is  
generating a response.

- RF10 (Multiple Sending Block): While a message is being processed, the input field  
and the send button should be disabled to prevent the sending of new simultaneous requests.

## Data Input and Sending
- RF11 (Adaptive Text Field): There should be a text input field (textarea type that  
expands as the text grows or a standard input) with Enter key support for quick sending.

- RF12 (Error Handling): If a request to n8n fails or times out, the frontend should  
display a friendly message in the stack informing that an error occurred and allow retrying.