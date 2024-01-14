# Classes of equivalence Testing Example:

Black-box testing - Functional testing

Popular posts page

## 1. Test Cases Table

| Input conditions | Valid classes  | Valid classes               | Invalid classes        |
| :---:            |    :----:      | :----:                      |     :---:              |
| N.º of posts = n |  n = 0         | 0 < n <= 15 <sup>(1)</sup>  | n >= 16 <sup>(2)</sup> |

| Test case | Expected output             | Class          |
| :---:     |    :----                    | :---:          |
| n = 0     | Returns blank page          | <sup>(1)</sup> |
| n = 1     | Returns one post            | <sup>(1)</sup> |
| n = 15    | Returns 15 posts            | <sup>(1)</sup> |
| n = 16    | Returns 15 posts most voted | <sup>(2)</sup> |
