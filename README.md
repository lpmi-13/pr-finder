# PR Finder

live demo (that doesn't work yet): [https://pr-finder.netlify.com](https://pr-finder.netlify.com)

Sometimes, people are working on side projects and have no way to get any feedback
on what they're doing.

It would be nice if they could request and receive help from completely random
strangers!

## assumptions

- PR's that people would like reviewed are tagged with `pr-review-request`
- it's possible to get additional data such as primary repo languages and diff count

...it would also be nice to eventually have some measurement of "how complicated" the
PR is, so beginners won't be stuck sorting through PR's that are beyond their ability to review.
In addition, very experienced programmers won't have to cycle through very simple
PR's if they don't want to.

## limitations

- currently, the Github API calls are happening on the client, which is not ideal,
since we'll have to make additional calls for each repo to get the info listed above(language and diff)
- it would be nice to use the GraphQL V4 Github API, though that requires auth, so either can't be done on the client side without incorporating some sort of Github auth step, or needs to be done server side, like with Gatsby.
- also needs some way to filter out bad words so the responses don't get flooded with spam
