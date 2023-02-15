-- 코드를 입력하세요
SELECT F.FLAVOR 
FROM FIRST_HALF F, ICECREAM_INFO I
    WHERE
        F.TOTAL_ORDER > 3000
        AND
        F.FLAVOR = I.FLAVOR
        AND
        I.INGREDIENT_TYPE = 'fruit_based'