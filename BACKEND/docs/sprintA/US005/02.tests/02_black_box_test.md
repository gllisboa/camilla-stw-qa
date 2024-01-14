# Black Box Testing / Functional Testing US005.bug

## 1. Boundary Values - Worst Case with Robustness:

### **Covered AC´s:** AC3 / AC3.1 / AC3.2 / AC3.3 / AC3.4


## Test Scenarios:

* Simultaneuos test of inputs fiels (title, text or link) with an alternation of test cases as per the test scenarios (1, 2, 3) specifications presented below.

<br>

### **Scenario 1 - title:**

* **Description:** The post must have a title with a minimum of 2 and a maximum of 85 characters, otherwise the following error message should be displayed "Yes, the title must have from 2 to 85 characters. Your it was"

<br>

* **Test Cases (min- , min , min+ , nom , max- , max , max+):**
  
  * **US005**  - Creates a post error title 1 characters

  * **US005/1** - Creates a post sucess title 2 characters

  * **US005/2** - Creates a post sucess title 3 characters

  * **US005/3** - Creates a post sucess title 40 characters

   * **US005/4** - Creates a post sucess title 84 characters

   * **US005/5** - Creates a post sucess title 85 characters

  * **US005/6** - Creates a post error title 86 characters

<br>

### **Scenario 2 - Text:**

* **Description:** Post text must be between 20 and 10,000 characters. If it doesn't meet this requirement, display the error message: "Text posts must be 20 to 10,000 characters. Yours was."

<br>

* **Test Cases (Text):**
  
   * **US005** - Creates a post error text 19 characters
   * **US005/1** - Creates a post sucess text 20 characters
   * **US005/2** - Creates a post sucess text 21 characters
   * **US005/3** - Creates a post sucess text 5000 characters
   * **US005/4** - Creates a post sucess text 9999 characters
   * **US005/5** - Creates a post sucess text 10000 characters
   * **US005/6** - Creates a post error text 10001 characters

<br>

### **Scenario 3 - Link:**

* **Description:** * **AC3.3:** The post must have a Link between 8 and 500 characters.
                   **AC3.4:** The post must have Link URLs using the three protocols (HTTP, HTTPS, FTP).

<br>

* **Test Cases (nom- , nom , nom+):**
  
 * **US005** - Creates a post error link 7 characters
 * **US005/1** - Creates a post sucess link 8 characters
 * **US005/2** - Creates a post sucess link 9 characters
 * **US005/3** - Creates a post sucess link 250 characters
 * **US005/4** - Creates a post sucess link 499 characters
 * **US005/5** - Creates a post sucess link 500 characters
 * **US005/6** - Creates a post error link 501 characters
 * **US005/7** - Creates a post sucess link http
 * **US005/8** - Creates a post error link http
 * **US005/9** - Creates a post sucess link https
 * **US005/10** - Creates a post error link https
 * **US005/11** - Creates a post sucess link ftp
 * **US005/12** - Creates a post error link ftp
 * **US005/13** - Creates a post error link ssh
 * **US005/14** - Creates a post error link string
 * **US005/15** - Creates a post error link number
 * **US005/16** - Creates a post error link !#$%&/()=!
<br>

## 2. Decision Tables

### **Conditions:**

* C1 - title			
* C2 - text			
* C3 - link			

### **Rules:**

* R1 - Missing Title		
* R2 - Missing Text		
* R3 - Missing Link		
* R4 - title characters < 2		
* R5 - title characters > 85		
* R6 - text		
* R7 - text characters < 20		
* R8 - text characters > 10000		
* R9 - link	
* R10 - link characters > 8
* R11 - link characters < 500	
* R12 - Link Protocolo (http,https,ftp)	

<br>

#### Rules:

| Rules | Conditions                          | Actions |
|-------|-------------------------------------|---------|
| R1    | Missing Title                       | "Yeah, the title should be between ${PostUtil.minTitleLength} and ${PostUtil.maxTitleLength} characters. Yours was ${title.length}. 🤠" |
| R2    | Missing Text                        | "Yeah, ${PostUtil.minTextLength} to ${PostUtil.maxTextLength} characters. Yours was ${text.length}. 🤠" |
| R3    | Missing Link                        | "Yeah, the link should be between ${PostUtil.minLinkLength} and ${PostUtil.maxLinkLength} characters long and must be a valid URL using one of the following protocols: ['http', 'https', 'ftp']. Yours was ${text.length} characters.🤠" |
| R4    | Title characters < 2                 | "Yeah, the title should be between ${PostUtil.minTitleLength} and ${PostUtil.maxTitleLength} characters. Yours was ${title.length}. 🤠" |
| R5    | Title characters > 85                | "Yeah, the title should be between ${PostUtil.minTitleLength} and ${PostUtil.maxTitleLength} characters. Yours was ${title.length}. 🤠" |
| R6    | Text                                | "Yeah, ${PostUtil.minTextLength} to ${PostUtil.maxTextLength} characters. Yours was ${text.length}. 🤠" |
| R7    | Text characters < 20                 | "Yeah, ${PostUtil.minTextLength} to ${PostUtil.maxTextLength} characters. Yours was ${text.length}. 🤠" |
| R8    | Text characters > 10000              | "Yeah, ${PostUtil.minTextLength} to ${PostUtil.maxTextLength} characters. Yours was ${text.length}. 🤠" |
| R9    | Link                                | "Yeah, the link should be between ${PostUtil.minLinkLength} and ${PostUtil.maxLinkLength} characters long and must be a valid URL using one of the following protocols: ['http', 'https', 'ftp']. Yours was ${text.length} characters.🤠" |
| R10   | Link characters > 8                  | "Yeah, the link should be between ${PostUtil.minLinkLength} and ${PostUtil.maxLinkLength} characters long and must be a valid URL using one of the following protocols: ['http', 'https', 'ftp']. Yours was ${text.length} characters.🤠" |
| R11   | Link characters < 500                | "Yeah, the link should be between ${PostUtil.minLinkLength} and ${PostUtil.maxLinkLength} characters long and must be a valid URL using one of the following protocols: ['http', 'https', 'ftp']. Yours was ${text.length} characters.🤠" |
| R12   | Link Protocolo (http,https,ftp)      | "Yeah, the link should be between ${PostUtil.minLinkLength} and ${PostUtil.maxLinkLength} characters long and must be a valid URL using one of the following protocols: ['http', 'https', 'ftp']. Yours was ${text.length} characters.🤠" |
<br>

# Project Name

Brief description of the project

## EEDTS - Extended Entry Decision Table Specification

|    |R1 |R2 |R3 |R4 |R5 |R6 |R7 |R8 |R9 |R10|R11| R12|
|----|---|---|---|---|---|---|---|---|---|---|---|----|
|C1  | T | T | T | T | T | F | F | F | F | F | F | F  |
|C2  | T | T | F | F | T | F | F | T | T | F | F | F  |
|C3  | T | F | T | F | T | F | T | F | T | F | F | F  |
|A1  | X |   |   |   |   |   |   |   |   |   |   |    |
|A2  |   | X |   |   |   |   |   |   |   |   |   |    |
|A3  |   |   | X |   |   |   | X |   |   |   |   |    |
|A4  |   |   |   | X |   |   |   |   |   |   |   |    |
|A5  |   |   |   |   | X |   |   |   |   |   |   |    |
|A6  |   |   |   |   |   | X |   |   |   |   |   |    |
|A7  |   |   |   |   |   |   |   | X | X | X | X | X  |
|A8  |   |   |   |   |   |   |   | X | X | X | X | X  |

## Simplified EEDTS

|    |R1 |R2 |R3 |R4 |R5 |R6 |R7 |R8,R9 |R10,R11,R12|
|----|---|---|---|---|---|---|---|------|-----------|
|C1  | T | T | T | T | T | F | F | F    | F         |
|C2  | T | T | F | F | T | F | F | T    | F         |
|C3  | T | F | T | F | T | F | T | -    | F         |
|A1  | X |   |   |   |   |   |   |      |           |
|A2  |   | X |   |   |   |   |   |      |           |
|A3  |   |   | X |   |   |   | X |      |           |
|A4  |   |   |   | X |   |   |   |      |           |
|A5  |   |   |   |   | X |   |   |      |           |
|A6  |   |   |   |   |   | X |   |      |           |
|A7  |   |   |   |   |   |   |   | X    | X         |
|A8  |   |   |   |   |   |   |   | X    | X         |

## Classes of Equivalence

### title:

|C1             |C2               |C3               |
|---------------|-----------------|-----------------|
|Invalid (<0)   |Valid (0-15)     |Invalid (>15)    |
|Invalid        |Valid            |Invalid          |

### tex:

|C1             |C2               |
|---------------|-----------------|
|Invalid Format |Valid Format     |
|Invalid        |Valid            |

### Link:

|C1             |C2               |
|---------------|-----------------|
|Invalid (<6)   |Valid (>=6)      |
|Invalid        |Valid            |
