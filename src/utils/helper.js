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
        quetionTotalVotes: optionOne.votes.length + optionTwo.votes.length
    }
}

export function voteCounter (question) {
    return question.optionOne.votes.length + question.optionTwo.votes.length 
}