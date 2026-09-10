#   age=20
# print(age%5)
# age=2
# age%=1

# print(age)
# print((2+2)*2)
# age=int(input("enter your age?"))
# if age<=50 or age>=0:
#     if age>18:
#         print("eligible for voting")
#     elif age>15:
#         print('Eligible for Dummy vote Cast')
#     else:
#         print("Not Eligible")
# else:
#     print("age is less than zero or greater than 50")


cities = ['karachi','islamabad','lahore']
# cities.pop(1)
# print(cities)
# cities = ('karachi','islamabad',3) 
# cities.append('new')
# print(cities)
# city=input("enter your city name")
# found=False
# for a in cities:
#     if a==city:
#         print(city,"found")
#         found=True
#         break
    
# if not found:
#     print(city,"notfound!")    

# first_names = ["ali ", "hamza", "bilal","osama", "kaif"]
# last_names = ["kamran", "anus", "shoaib", "farooq"]
# full_names = []
# for a_first_name in first_names:
 
#  for a_last_name in last_names:
#   full_names.append(a_first_name + " " +a_last_name)
 
# print(full_names)
# a=str(input('enter any number'))
# print(a+"2")
# print(std_1['Address']['hosueNo'])
# for key in std_1:
#     print(std_1[key]['hosueNo'])
# print(std_1['Hobbies'][0][1])






students=[{
    'name':'kaif',
    'age':2,
    'isAlive':True,
    'Hobbies':[['js','python'],'Book Reading',],
    'Address':{
        'hosueNo':12
    }
},{
    'name':'farooq',
    'age':233,
    'isAlive':True,
    'Hobbies':[['js','python'],'Book Reading',],
    'Address':{
        'hosueNo':12
    }
},{
    'name':'bilal',
    'age':23,
    'isAlive':True,
    'Hobbies':[['js','python'],'Book Reading',],
    'Address':{
        'hosueNo':12
    }
}]


for std in students:
    print(std['name'],std['age'])