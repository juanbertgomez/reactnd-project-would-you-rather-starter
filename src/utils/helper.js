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
        questionTotalVotes: questionVotes(question).length,
        answered: questionVotes(question).includes(authedUser) ? 'Yes' : 'No'
    }
}

export function formatUser (user) {
    const {name, avatarURL, answers, questions} = user

    return {
        name,
        avatar: avatarURL,
        answeredQuestions: Object.keys(answers).length,
        userQuestions: questions.length,
        totalPoints: Object.keys(answers).length + questions.length
    }
}

export function questionVotes (question) {
    return question.optionOne.votes.concat(question.optionTwo.votes) 
}

export function questionAnswered (authedUser, question) {
    return questionVotes(question).includes(authedUser)
}