#
# Makefile for calc1
# Written by Kazi Ashrafuzzaman
#

YACC    = bison -d -v
LEX     = flex
CC      = gcc

TARGET  = calc1

OBJS += calc1lexer.o calc1parser.o
RMFILES = calc1lexer.c calc1parser.c calc1parser.h calc1parser.output $(TARGET) $(OBJS)

# Dependencies and Rules
$(TARGET): calc1parser.c calc1lexer.c calc1parser.h $(OBJS)
	$(CC) -o $(TARGET) $(OBJS)

calc1parser.c: calc1.y
	$(YACC) -o $@ $<

calc1lexer.c: calc1.l
	$(LEX) -o $@ $<

calc1lexer.o: calc1lexer.c calc1parser.h
	$(CC) -o $@ -c $<

calc1parser.o: calc1parser.c calc1parser.h
	$(CC) -o $@ -c $<

clean:
	rm -f $(RMFILES)
superclean:
	rm -f $(RMFILES) $(TARGET)

