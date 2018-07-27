export function formatQuestion (authedUser, user, question) {
    const { id, author, optionOne, optionTwo } = question
    const { name, avatarURL } = user

    return {
        name,
        id,
        author,
        avatar: avatarURL,
        optionOneText: optionOne.text,
        optionOneVotes: optionOne.votes.length,
        optionTwoText: optionTwo.text,
        optionTwoVotes: optionTwo.votes.length,
        quetionTotalVotes: optionOne.votes.length + optionTwo.votes.length,
        votes: questionVotes(question).length,
        answered: questionVotes(question).includes(authedUser) ? 'Yes' : 'No'
    }
}

export function questionVotes (question) {
    return question.optionOne.votes.concat(question.optionTwo.votes) 
}

export function questionAnswered (authedUser, question) {
    return questionVotes(question).includes(authedUser)
}