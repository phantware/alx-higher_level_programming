# #!/usr/bin/python3
# for letter in range(97, 123):
#     if chr(letter) != 'q' and chr(letter) != 'e':
#         print("{}".format(chr(letter)), end="")

import string
print("Alphabet from a-z:")
for letter in string.ascii_lowercase:
    if letter != 'q' and letter !='e':
        print(letter, end =" ")
