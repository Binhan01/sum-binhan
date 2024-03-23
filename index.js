import turtle

# Khởi tạo đối tượng turtle
t = turtle.Turtle()

# Vẽ mặt phía trên của hình lập phương
for _ in range(4):
    t.forward(100)  # Vẽ cạnh của hình vuông
    t.left(90)

# Di chuyển tới một góc để vẽ mặt dưới của hình lập phương
t.penup()
t.goto(50, 50)  # Di chuyển lên trên để vẽ mặt dưới
t.pendown()

# Vẽ mặt dưới của hình lập phương
for _ in range(4):
    t.forward(100)  # Vẽ cạnh của hình vuông
    t.left(90)

# Vẽ các cạnh nối giữa mặt phía trên và mặt phía dưới
for _ in range(4):
    t.penup()
    t.goto(0, 0)  # Di chuyển về điểm ban đầu
    t.pendown()
    t.goto(50, 50)  # Di chuyển tới điểm trên mặt phía trên
    t.penup()
    t.goto(150, 50)  # Di chuyển tới điểm trên mặt phía dưới
    t.pendown()
    t.goto(200, 0)  # Vẽ cạnh nối từ điểm trên đến điểm dưới
    t.left(90)

# Ẩn con rùa
t.hideturtle()

# Hoàn thành
turtle.done()
