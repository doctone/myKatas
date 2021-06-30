'''
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pig_it('Pig latin is cool') # igPay atinlay siay oolcay
pig_it('Hello world !')     # elloHay orldway !

'''

def pig_it(text):
    #create empty list of new words
    new_words = []
    final_words = []
    #turn text in to list of words
    #iterate through each word
    for word in text.split():
    #move first letter of word to the end of the word
        new_words.append(word[1:]+word[0])
    #add word + 'ay' to final word list
    for word in new_words:
        final_words.append(word +'ay')
    return ' '.join(final_words)
    
print(pig_it('this is a test of my new function'))