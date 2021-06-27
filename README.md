<h1>A Tutorial Lesson on Reactjs Containment</h1>
<hr>
<p>
A short Reactjs app on the concept of Containment.  Rather than using inheritance, React uses props in order to 
"inherit" items from other Components.  You can see this done primarily in the FancyBorder component.  There, 
the "{props.children}" element means that any child tags or components are rendered when FancyBorder renders.</p>
<p>
This is also shown again in the Dialog component to get the Form Input and Button to display when called.<p>
<h3>Some extra things I've learned in this lesson.</h3>
<ul>

<li>Getting split screens is not an easy thing to do in CSS.</li>
<li>Some of the lesson items do not reveal the CSS used to make things work. I had to figure them out.</li>
<li>Correctly formatted, Reactjs can conditionally choose CSS elements.</li>
<li>The "export" statement can begin a function or class declaration.  You must use {} in the import, though.</li>  