function removeFeedBackMessage(id) {
    let feedbackMessages = document.getElementById('feedback-messages');
    let feedbackMessage = document.getElementById(id);
    feedbackMessages.removeChild(feedbackMessage);
}