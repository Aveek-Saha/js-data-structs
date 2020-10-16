// N Queens

export default function Nqueens(n) {
    let board = Array.from(Array(n), () => Array.from(Array(n), () => 0));

    solve(0);
    function isSafe(row, col) {
        for (let i = 0; i < col; i++) {
            if (board[row][i] == 1) return false;
        }
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 1) return false;
        }
        for (let i = row, j = col; j >= 0 && i < n; i++, j--) {
            if (board[i][j] == 1) return false;
        }
        return true;
    }

    function solve(col) {
        if (col >= n) return true;

        for (let i = 0; i < n; i++) {
            if (isSafe(i, col)) {
                board[i][col] = 1;
                if (solve(col + 1)) return true;

                board[i][col] = 0;
            }
        }
        return false;
    }
    return board;
}
