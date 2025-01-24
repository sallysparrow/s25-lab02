package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Renderer {
    public Rectangle rectangle;
    
    public Renderer(Rectangle rectangle) {
        this.rectangle = rectangle;
    }

    public void draw() {
        double area = rectangle.getArea();

        // assume implementation

        System.out.println("Shape printed\n" + "Its area is " + area);
    }
}
