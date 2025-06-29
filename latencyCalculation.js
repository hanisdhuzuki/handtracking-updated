// Create an array to store the data for gestures
let gestureData = [];

// Function to log when the gesture is performed
function logGesturePerformed(gestureType) {
    let gesturePerformedTime = new Date();
    console.log("Performed Gesture: " + gestureType + " at " + gesturePerformedTime);
    return {gestureType, gesturePerformedTime};
}

// Function to log when the gesture is detected by the system
function logGestureDetected(gestureInfo) {
    let gestureDetectedTime = new Date();
    console.log("Detected Gesture at: " + gestureDetectedTime);
    
    // Calculate latency in milliseconds
    let latency = gestureDetectedTime - gestureInfo.gesturePerformedTime;
    console.log("Latency: " + latency + " ms");

    // Add the data to the array
    gestureData.push({
        Gesture: gestureInfo.gestureType,
        PerformedTime: gestureInfo.gesturePerformedTime,
        DetectedTime: gestureDetectedTime,
        Latency: latency + " ms"
    });
}

// Function to display the data in a table format
function showGestureTable() {
    console.table(gestureData);
}

let openHandInfo = logGesturePerformed("Open Hand");
let closeHandInfo = logGesturePerformed("Close Hand");
logGestureDetected(openHandInfo);
logGestureDetected(closeHandInfo);
showGestureTable();
