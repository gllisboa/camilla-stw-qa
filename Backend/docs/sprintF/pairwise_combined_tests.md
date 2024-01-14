# Pairwise Testing Example: Exploring Comprehensive Combinations - 

## 1. Parameters

activeFilter: 'NEW', 'POPULAR', 'ASCENDING'
isYoungerThanTwoDays: true, false
isOlderThanTwoDays: true, false
isWithinSevenDays: true, false
isOlderThanSevenDays: true, false
textClass: 'yellow-text', 'green-text', 'red-text', 'purple-text'
numberOfCommentsIsLessThanOneThird: true, false
numberOfCommentsIsBetweenOneThirdAndTwoThirds: true, false
numberOfCommentsIsMoreThanTwoThirds: true, false
numberOfCommentsEqualsZero: true, false
backgroundClass: 'yellow-background', 'green-background', 'red-background'


In this Pairwise Example, we leverage the Pairwise Technique to present a set of test cases meticulously crafted to cover all conceivable combinations of input parameters defined by a user story. Each row in the table represents a unique combination, ensuring a thorough examination of the software's behavior under various scenarios.

The parameters, ranging from 'activeFilter' to 'backgroundClass,' encapsulate the diverse conditions and states that the software may encounter. As you explore this table, you'll witness a systematic exploration of possibilities, optimizing your testing efforts while ensuring robust coverage.

### 1.1. Test Cases Table

| activeFilter | isYoungerThanTwoDays | isOlderThanTwoDays | isWithinSevenDays | isOlderThanSevenDays | textClass    | numberOfCommentsIsLessThanOneThird | numberOfCommentsIsBetweenOneThirdAndTwoThirds | numberOfCommentsIsMoreThanTwoThirds | numberOfCommentsEqualsZero | backgroundClass     |
| ------------ | -------------------- | ------------------- | ------------------ | -------------------- | ------------ | ------------------------------------- | -------------------------------------------- | --------------------------------- | ---------------------------- | ------------------- |
| 'NEW'         | false                | false               | true               | false                | 'purple-text'| false                               | true                                         | true                              | true                         | 'red-background'    |
| 'POPULAR'     | true                 | true                | false              | true                 | 'red-text'   | true                                | false                                        | false                             | false                        | 'green-background'  |
| 'ASCENDING'   | true                 | false               | false              | false                | 'green-text' | true                                | true                                         | true                              | false                        | 'yellow-background' |
| 'ASCENDING'   | false                | true                | true               | true                 | 'green-text' | false                               | false                                        | false                             | true                         | 'green-background'  |
| 'NEW'         | false                | false               | false              | true                 | 'yellow-text'| true                                | false                                        | false                             | true                         | 'yellow-background' |
| 'ASCENDING'   | true                 | true                | true               | false                | 'red-text'   | false                               | false                                        | true                              | false                        | 'red-background'    |
| 'NEW'         | true                 | true                | false              | true                 | 'red-text'   | false                               | true                                         | true                              | true                         | 'green-background'  |
| 'POPULAR'     | false                | false               | true               | false                | 'green-text' | true                                | true                                         | false                             | true                         | 'red-background'    |
| 'ASCENDING'   | false                | true                | false              | false                | 'yellow-text'| false                               | true                                         | true                              | false                        | 'red-background'    |
| 'POPULAR'     | true                 | true                | true               | true                 | 'purple-text'| false                               | false                                        | true                              | false                        | 'yellow-background' |
| 'NEW'         | false                | false               | true               | false                | 'red-text'   | true                                | true                                         | true                              | false                        | 'yellow-background' |
| 'POPULAR'     | true                 | false               | true               | false                | 'yellow-text'| true                                | false                                        | false                             | false                        | 'green-background'  |
| 'ASCENDING'   | true                 | false               | false              | true                 | 'purple-text'| true                                | true                                         | false                             | false                        | 'green-background'  |
| 'NEW'         | false                | false               | true               | true                 | 'green-text' | false                               | true                                         | false                             | false                        | 'red-background'    |
