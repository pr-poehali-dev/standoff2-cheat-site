import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface UploadedFile {
  name: string;
  url: string;
  size: number;
}

export default function FileUpload() {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [fileLink, setFileLink] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    const url = URL.createObjectURL(file);
    setUploadedFile({
      name: file.name,
      url: url,
      size: file.size,
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Icon name="Upload" size={24} />
          Загрузить файл
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!uploadedFile ? (
          <>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragging
                  ? "border-purple-400 bg-purple-400/10"
                  : "border-gray-600 hover:border-gray-500"
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
            >
              <Icon
                name="CloudUpload"
                size={48}
                className="mx-auto mb-4 text-gray-400"
              />
              <p className="text-gray-300 mb-2">
                Перетащите файл сюда или нажмите для выбора
              </p>
              <p className="text-sm text-gray-500">
                Поддерживаются все форматы файлов
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-300">
                Или введите ссылку на файл:
              </label>
              <div className="flex gap-2">
                <Input
                  placeholder="https://example.com/file.zip"
                  value={fileLink}
                  onChange={(e) => setFileLink(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
                <Button
                  onClick={() => {
                    if (fileLink) {
                      setUploadedFile({
                        name: fileLink.split("/").pop() || "Внешний файл",
                        url: fileLink,
                        size: 0,
                      });
                    }
                  }}
                  disabled={!fileLink}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Добавить
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
              <Icon name="File" size={24} className="text-purple-400" />
              <div className="flex-1">
                <p className="text-white font-medium">{uploadedFile.name}</p>
                {uploadedFile.size > 0 && (
                  <p className="text-sm text-gray-400">
                    {formatFileSize(uploadedFile.size)}
                  </p>
                )}
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(uploadedFile.url)}
                className="border-gray-600 text-gray-300 hover:bg-gray-600"
              >
                <Icon name="Copy" size={16} className="mr-1" />
                Копировать ссылку
              </Button>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => {
                  setUploadedFile(null);
                  setFileLink("");
                }}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-600"
              >
                Загрузить другой
              </Button>
            </div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFileSelect(file);
          }}
        />
      </CardContent>
    </Card>
  );
}
