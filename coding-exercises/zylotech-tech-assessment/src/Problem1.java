import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Problem1 {

  /**
   * Takes in an array of files and builds the camelCase output file name.
   * @param files
   * @return single file name in camelCase with the appropriate extension
   */
  public static String handleFileName(String[] files) {
    String outputFile = "";
    String fileType = "";
    String[] fileNames = new String[files.length];
    for (int i = 0; i < files.length; i++) {
      int indexOfDot = files[i].indexOf('.');
      fileType = files[0].substring(indexOfDot, files[0].length());
      String strippedFile = files[i].substring(0, indexOfDot);
      fileNames[i] = strippedFile;
    }

    for (int i = 0; i < fileNames.length; i++) {
      if (i == 0) {
        outputFile += fileNames[i].toLowerCase();
      } else {
        outputFile += fileNames[i].substring(0, 1).toUpperCase() + fileNames[i].substring(1);
      }
    }

    return outputFile + fileType;
  }

  /**
   * Clean's a file's contents, removing $ characters.
   * @param fileContents
   * @return cleaned file contents
   */
  public static String handleFileContents(String fileContents) {
    return fileContents.replaceAll("[$]", "");
  }

  public static void main(String[] args) throws IOException {

    //allow input via STDIN
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    int numberOfFiles = Integer.parseInt(bufferedReader.readLine());
    String[] files = new String[numberOfFiles];
    String allFileContent = "";

    //make sure a user cannot enter negative numbers or 0 files
    if (numberOfFiles > 0) {
      for (int i = 0; i < numberOfFiles; i++) {
        int newFileCounter = 0;
        String fileName = bufferedReader.readLine();

        //extract the file name inputs to an array
        files[i] = fileName;

        //check for 3 blank lines to designate a new file
        while (newFileCounter < 3) {
          String line = bufferedReader.readLine();

          if (line.equals("")) {
            newFileCounter++;
          } else {
            //reset the counter if there isn't a new line
            newFileCounter = 0;

            //only add a new line to the elements after the first
            if (allFileContent.equals("")) {
              allFileContent += line;
            } else {
              allFileContent += '\n' + line;
            }
          }
        }
      }
    }
    String outputFile = handleFileName(files);
    System.out.println(outputFile);
    allFileContent = handleFileContents(allFileContent);
    System.out.println(allFileContent);
  }
}
