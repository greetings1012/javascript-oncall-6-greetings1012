# 구현할 기능 목록

## 1

- [] `비상 근무를 배정할 월과 시작 요일을 입력하세요> ` 를 출력하고, 월과 시작 요일을 일력받는다.
 - [] 입력 내용에 쉼표가 2개 이상이거나, 쉼표가 없거나, 쉼표 뒤에 숫자가 오면 `[ERROR] 잘못된 형식의 입력입니다. 월(숫자),요일(한글)의 형식으로 다시 입력해주세요. (ex: 5,월)`를 출력하고 다시 입력받는다.
 - [] 입력받은 월의 숫자가 1 미만이거나 12를 초과하면 `[ERROR] 월에는 1부터 12 사이의 숫자로 입력해야 합니다. 다시 입력해주세요.`를 출력하고 다시 입력받는다.
 - [] 입력받은 요일이 월, 화, 수, 목, 금, 토, 일 이외의 글자라면 `[ERROR] 요일에는 [월, 화, 수, 목, 금, 토, 일] 중 하나가 입력되어야 합니다. 다시 입력해주세요.`를 출력하고 1번 항목의 시작으로 돌아가 다시 입력받는다.

## 2

- [] `평일 비상 근무 순번대로 사원 닉네임을 입력하세요>` 를 출력하고, 평일 비상 근무 순서를 입력받는다.
 - [] 같은 사원이 2번 이상 중복 입력될 경우 `[ERROR] 같은 사원이 한 순번에 2번 이상 들어갈 수 없습니다. 평일 비상 근무 순번부터 다시 입력해주세요.`를 출력하고 2번 항목의 시작으로 돌아가 다시 입력받는다.

## 3

- [] `휴일 비상 근무 순번대로 사원 닉네임을 입력하세요>` 를 출력하고, 휴일 비상 근무 순서를 입력받는다.
 - [] 같은 사원이 2번 이상 중복 입력될 경우 `[ERROR] 같은 사원이 한 순번에 2번 이상 들어갈 수 없습니다. 평일 비상 근무 순번부터 다시 입력해주세요.`를 출력하고 2번 항목의 시작으로 돌아가 다시 입력받는다.

## 4

- [] 입력받은 월 동안의 근무표를 계산한다.
 - [] 휴일 비상 근무에 연속해서 평일 비상 근무를 서야 하는 경우가 생기면 평일 비상 근무의 순서를 다음 평일 근무자와 바꾼다.
 - [] 평일 비상 근무에 연속해서 휴일 비상 근무를 서야 하는 경우가 생기면 휴일 비상 근무의 순서를 다음 휴일 근무자와 바꾼다.

## 5
- [] 비상 근무표를 출력하고 프로그램을 종료한다.
 - [] 평일이면서 법정공휴일인 요일 뒤에 `(휴일)`을 출력한다.