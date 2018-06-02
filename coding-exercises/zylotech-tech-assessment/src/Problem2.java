import sun.tools.native2ascii.Main;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class Problem2 {

  /*
  NOTE** I chose to make the XyloHack method static because String is final.

  For this problem, I use reflection so that the method name can be
  passed in as a String like in the prompt.
   */

  /**
   * If the number is even, make the string uppercase, if the number is
   * odd, make the string lowercase.
   * @param str is the string to be transformed
   * @param n is the input number
   * @return a transformed string
   */
  public static String XyloHack(String str, int n) {
    //even
    if ((n % 2) == 0) {
      return str.toUpperCase();
    }
    //odd
    else {
      return str.toLowerCase();
    }
  }

  /*
    SAMPLE INPUT:
    3
    XyloHack('i love JavaScript', 67);
    XyloHack('THE Cake is A LIE', 8);
    XyloHack('iAmWobBly', 1);

    SAMPLE OUTPUT:
    'i love javascript'
    'THE CAKE IS A LIE'
    'iamwobbly'
   */

  public static void main(String[] args) throws IOException, ClassNotFoundException, NoSuchMethodException, InvocationTargetException, IllegalAccessException {
    //allow input via STDIN
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    int numberOfFunctionCalls = Integer.parseInt(bufferedReader.readLine());
    String finalOutput = "";

    for (int i = 0; i < numberOfFunctionCalls; i++) {
      String functionToRun = bufferedReader.readLine();
      String copyOfFunctionToRun = functionToRun;

      //starting and ending indexes of the stringified method's arguments
      int startStr = functionToRun.indexOf('\'');
      int endStr = functionToRun.indexOf(',');
      int startN = copyOfFunctionToRun.indexOf(", ");
      int endN = copyOfFunctionToRun.indexOf(')');

      //XyloHack's arguments
      String str = functionToRun.substring(startStr, endStr);
      int n = Integer.parseInt(copyOfFunctionToRun.substring(startN + 2, endN));

      //reading method from STDIN and calling it numberOfFunctionCalls times
      Class c = Main.class.getClassLoader().loadClass("Problem2");
      Method m = c.getMethod("XyloHack", String.class, int.class);
      String result = (String) m.invoke(null, str, n);

      //add a new line after each result excluding the first
      if (i == 0) {
        finalOutput += result;
      } else {
        finalOutput += '\n' + result;
      }
    }
    System.out.println(finalOutput);
  }
}
