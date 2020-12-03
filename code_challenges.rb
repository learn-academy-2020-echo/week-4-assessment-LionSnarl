# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest. Use the test variables provided.

full_arr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
full_arr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]
fake_arr2 = [6, 8, 1, -6, 42, 2]
# Expected Fake output: [-6, 1, 2, 6, 8, 42]


p fake_arr2.sort



# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water']

# use include?
result = []
beverages_array.each do | beverages_array |
  if beverages_array.include? 'a'
    result = beverages_array
    p [beverages_array]
  end
end

result = []
beverages_array.each do | beverages_array |
  if beverages_array.include? 'o'
    result = beverages_array
    p [beverages_array]
  end
end
# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_killer
"Rubber Soul".delete "u"
"Rbber Soul".delete "o"
"Rbber Sul".delete "u"
"Rbber Sl".delete "e"
end
p vowel_killer

def vowel_killer2
"Sgt Pepper".delete "e"
end
p vowel_killer2

def vowel_killer3
"Abbey Road".delete "A"
"bbet Road".delete "a"
"bbet Rod".delete "o"
end
p vowel_killer3

# -------------------4) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array1 = [25, 17, 47, 11]
# Expected output: 100


#def add_array
#  let i=0
#  i[0]+i[1]+i[2]
#end
#p add_array



# -------------------5) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# STRETCH
is_palindrome4 = 'Was it a cat I saw'
# Expected output: Was it a cat I saw is a palindrome'

def check_palindromic(variable)
  if variable == variable.reverse
    puts "#{ variable } is a palindrome."
  else
    puts "#{ variable } is not a palindrome."
  end
end

p check_palindromic(is_palindrome1)
p check_palindromic(is_palindrome2)
p check_palindromic(is_palindrome3)
p check_palindromic(is_palindrome4)
