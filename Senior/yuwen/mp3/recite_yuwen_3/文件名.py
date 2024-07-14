import os

# 指定路径
path = os.getcwd()
list1 = []

# 获取路径下所有文件和文件夹的名字
filenames = os.listdir(path)

# 打印所有文件名
for filename in filenames:
    if filename.endswith(".mp3") or filename.endswith(".wav") or filename.endswith(".m4a"):
        list1.append("yuwen/mp3/recite_yuwen_3/"+filename)
    # print(filename)
print(list1)
